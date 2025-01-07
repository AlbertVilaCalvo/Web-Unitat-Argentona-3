import { getCollection } from 'astro:content'

export async function getPostsSorted() {
  const allPosts = await getCollection('blog')
  return allPosts.sort((a, b) => {
    return b.id.localeCompare(a.id)
  })
}

export async function getNextAgendaEvents() {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const nextEvents = await getCollection('agenda', ({ data: event }) => {
    return yesterday.getTime() <= event.date.getTime()
  })
  return nextEvents.sort((a, b) => {
    return a.id.localeCompare(b.id)
  })
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
