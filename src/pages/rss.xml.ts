import type { AstroGlobal, ImageMetadata } from 'astro'
import { getImage } from 'astro:assets'
import type { CollectionEntry } from 'astro:content'
import rss from '@astrojs/rss'
import type { Root } from 'mdast'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import { getBlogCollection, sortMDByDate } from 'astro-pure/server'
import config from 'virtual:config'

const imagesGlob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/blog/**/*.{jpeg,jpg,png,gif,avif,webp}'
)

const renderContent = async (post: CollectionEntry<'blog'>, site: URL) => {
  if (!post.body) { // #16: guard empty body
    console.warn(`[RSS] Skipping empty body for: ${post.id}`)
    return ''
  }

  function remarkReplaceImageLink() {
    return async (tree: Root) => {
      const promises: Promise<void>[] = []
      visit(tree, 'image', (node) => {
        if (node.url.startsWith('/images')) {
          node.url = `${site}${node.url.replace('/', '')}`
        } else {
          const p = `/src/content/blog/${post.id}/${node.url.replace('./', '')}`
          const promise = imagesGlob[p]?.().then(async (res) => {
            const img = res?.default
            if (img) node.url = `${site}${(await getImage({ src: img })).src.replace('/', '')}`
          })
          if (promise) promises.push(promise)
        }
      })
      await Promise.all(promises)
    }
  }

  try {
    const file = await unified()
      .use(remarkParse).use(remarkReplaceImageLink).use(remarkRehype).use(rehypeStringify)
      .process(post.body)
    return String(file)
  } catch (e) {
    console.error(`[RSS] Render failed for ${post.id}:`, e)
    return ''
  }
}

function getHeroImageUrl(heroImage: any): string | null {
  if (!heroImage) return null
  try {
    if (typeof heroImage === 'string') return heroImage
    if (heroImage.src) {
      if (typeof heroImage.src === 'string') return heroImage.src
      if (heroImage.src.src) return heroImage.src.src
    }
  } catch {}
  return null
}

const GET = async (context: AstroGlobal) => {
  const posts = sortMDByDate(await getBlogCollection()) as CollectionEntry<'blog'>[]
  const siteUrl = context.site ?? new URL(import.meta.env.SITE) // #25: use context.site

  return rss({
    trailingSlash: false,
    xmlns: { h: 'http://www.w3.org/TR/html4/' },
    stylesheet: '/scripts/pretty-feed-v3.xsl',
    title: config.title,
    description: config.description,
    site: String(siteUrl),
    items: await Promise.all(posts.map(async (post) => {
      const heroUrl = getHeroImageUrl(post.data.heroImage)
      const customData = heroUrl ? `<h:img src="${heroUrl}" />` : undefined // #17: omit enclosure with length=0
      return {
        pubDate: post.data.publishDate,
        link: `/blog/${post.id}`,
        customData,
        content: await renderContent(post, siteUrl),
        ...post.data
      }
    }))
  })
}

export { GET }
