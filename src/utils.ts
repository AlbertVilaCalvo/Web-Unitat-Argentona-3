import { getCollection } from 'astro:content'

export async function getPostsSorted() {
  const allPosts = await getCollection('blog')
  return allPosts.sort((a, b) => {
    return b.slug.localeCompare(a.slug)
  })
}
