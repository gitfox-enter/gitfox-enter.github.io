// Post-build: fix hardcoded links in dist that don't respect Astro base path
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const BASE = '/gold-bear-blog'
const DIST = 'dist'

function walk(dir) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      files.push(...walk(full))
    } else if (entry.endsWith('.html')) {
      files.push(full)
    }
  }
  return files
}

// Collect all blog article slugs from content directory
function getBlogSlugs() {
  const blogDir = join('src', 'content', 'blog')
  try {
    return readdirSync(blogDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
  } catch {
    return []
  }
}

const htmlFiles = walk(DIST)
const blogSlugs = getBlogSlugs()
let fixed = 0

console.log(`Found ${blogSlugs.length} blog article slugs: ${blogSlugs.join(', ')}`)

for (const file of htmlFiles) {
  let content = readFileSync(file, 'utf-8')
  const original = content

  // Fix search link in header
  content = content.replace(/href="\/search"/g, `href="${BASE}/search"`)
  // Fix blog post links (from PostPreview component)
  content = content.replace(/href="\/blog\//g, `href="${BASE}/blog/`)
  // Fix tag links (from PostPreview tag badges)
  content = content.replace(/href="\/tags\//g, `href="${BASE}/tags/`)
  // Fix brand/logo home link (Header component hardcodes href="/")
  content = content.replace(/href="\/"(?=\s|>)/g, `href="${BASE}/"`)
  // Fix Back button link in blog posts (hardcoded href="/blog")
  content = content.replace(/href="\/blog"(?=\s|>)/g, `href="${BASE}/blog"`)
  // Fix coffee link (Buy me a cup of coffee) — redirect to sponsor page
  content = content.replace(/href="\/projects#sponsorship"/g, `href="${BASE}/sponsor"`)
  // Fix archives link
  content = content.replace(/href="\/archives"/g, `href="${BASE}/archives"`)
  // Fix docs internal links
  content = content.replace(/href="\/docs\//g, `href="${BASE}/docs/`)
  // Fix terms links
  content = content.replace(/href="\/terms\//g, `href="${BASE}/terms/`)
  // Fix sponsor page link
  content = content.replace(/href="\/sponsor"/g, `href="${BASE}/sponsor"`)
  // Fix projects page link
  content = content.replace(/href="\/projects"/g, `href="${BASE}/projects"`)

  // Fix prev/next post navigation in blog detail pages
  // ArticleBottom.astro uses slice(0,2) which drops /blog/ from path
  // e.g. /gold-bear-blog/my-projects → /gold-bear-blog/blog/my-projects
  // Use normalized path (forward slashes) for cross-platform matching
  const normalized = file.replace(/\\/g, '/')
  if (normalized.includes('dist/blog/') && blogSlugs.length > 0) {
    for (const slug of blogSlugs) {
      content = content.replace(
        new RegExp(`href="${BASE}/${slug}"`, 'g'),
        `href="${BASE}/blog/${slug}"`
      )
    }
  }

  if (content !== original) {
    writeFileSync(file, content, 'utf-8')
    fixed++
  }
}

console.log(`Fixed base path in ${fixed} HTML files`)
