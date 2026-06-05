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

const htmlFiles = walk(DIST)
let fixed = 0

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

  if (content !== original) {
    writeFileSync(file, content, 'utf-8')
    fixed++
  }
}

console.log(`Fixed base path in ${fixed} HTML files`)
