import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

// Agenda

const agendaEventSchema = z.object({
  title: z.string(),
  date: z.date(),
  lloc: z.string(),
})
const agendaCollection = defineCollection({
  schema: agendaEventSchema,
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/agenda' }),
})

// Blog

const blogPostSchema = z.object({
  title: z.string(),
  date: z.date(),
  // https://astro.build/blog/astro-250/#data-collections-and-references
  // author: z.reference('authors'),
})
const blogCollection = defineCollection({
  schema: blogPostSchema,
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
})
export type BlogPost = z.infer<typeof blogPostSchema>

export const collections = {
  blog: blogCollection,
  agenda: agendaCollection,
}
