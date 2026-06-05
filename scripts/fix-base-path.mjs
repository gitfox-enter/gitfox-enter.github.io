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

  if (content !== original) {
    writeFileSync(file, content, 'utf-8')
    fixed++
  }
}

console.log(`Fixed base path in ${fixed} HTML files`)
