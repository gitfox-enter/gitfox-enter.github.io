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

// Get dynamic import of images as a map collection
const imagesGlob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/blog/**/*.{jpeg,jpg,png,gif,avif,webp}'
)

const renderContent = async (post: CollectionEntry<'blog'>, site: URL) => {
  // Replace image links with the correct path
  function remarkReplaceImageLink() {
    return async (tree: Root) => {
      const promises: Promise<void>[] = []
      visit(tree, 'image', (node) => {
        if (node.url.startsWith('/images')) {
          node.url = `${site}${node.url.replace('/', '')}`
        } else {
          const imagePathPrefix = `/src/content/blog/${post.id}/${node.url.replace('./', '')}`
          const promise = imagesGlob[imagePathPrefix]?.().then(async (res) => {
            const imagePath = res?.default
            if (imagePath) {
              node.url = `${site}${(await getImage({ src: imagePath })).src.replace('/', '')}`
            }
          })
          if (promise) promises.push(promise)
        }
      })
      await Promise.all(promises)
    }
  }

  try {
    const file = await unified()
      .use(remarkParse)
      .use(remarkReplaceImageLink)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(post.body)
    return String(file)
  } catch (e) {
    console.error(`Failed to render RSS content for ${post.id}:`, e)
    return ''
  }
}

// Safely extract image URL from heroImage
function getHeroImageUrl(heroImage: any, siteUrl: string): string | null {
  if (!heroImage) return null
  try {
    if (typeof heroImage === 'string') return heroImage
    if (heroImage.src) {
      if (typeof heroImage.src === 'string') return heroImage.src
      if (heroImage.src.src) return heroImage.src.src
    }
  } catch {
    return null
  }
  return null
}

const GET = async (context: AstroGlobal) => {
  const allPostsByDate = sortMDByDate(await getBlogCollection()) as CollectionEntry<'blog'>[]
  const siteUrl = context.site ?? new URL(import.meta.env.SITE)

  return rss({
    trailingSlash: false,
    xmlns: { h: 'http://www.w3.org/TR/html4/' },
    stylesheet: '/scripts/pretty-feed-v3.xsl',

    title: config.title,
    description: config.description,
    site: import.meta.env.SITE,
    items: await Promise.all(
      allPostsByDate.map(async (post) => {
        const heroUrl = getHeroImageUrl(post.data.heroImage, String(siteUrl))
        const customDataParts: string[] = []
        if (heroUrl) {
          customDataParts.push(`<h:img src="${heroUrl}" />`)
          customDataParts.push(`<enclosure url="${heroUrl}" type="image/jpeg" length="0" />`)
        }
        return {
          pubDate: post.data.publishDate,
          link: `/blog/${post.id}`,
          customData: customDataParts.length > 0 ? customDataParts.join('\n          ') : undefined,
          content: await renderContent(post, siteUrl),
          ...post.data
        }
      })
    )
  })
}

export { GET }
