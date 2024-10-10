import { getCollection } from 'astro:content'

export async function getPostsSorted() {
  const allPosts = await getCollection('blog')
  return allPosts.sort((a, b) => {
    return b.slug.localeCompare(a.slug)
  })
}

export async function getNextAgendaEvents() {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const nextEvents = await getCollection('agenda', ({ data: event }) => {
    return yesterday.getTime() <= event.date.getTime()
  })
  return nextEvents.sort((a, b) => {
    return a.slug.localeCompare(b.slug)
  })
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
