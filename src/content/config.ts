import { z, defineCollection } from 'astro:content'

const blogPostSchema = z.object({
  title: z.string(),
  date: z.date(),
})
const blogCollection = defineCollection({
  schema: blogPostSchema,
})
export type BlogPost = z.infer<typeof blogPostSchema>

export const collections = {
  blog: blogCollection,
}
