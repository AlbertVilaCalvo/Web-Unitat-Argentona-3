# Unitat Argentona

## Project overview

Astro 5 static site for a Catalan local political organization `Unitat · Argentona per la República`. No UI frameworks. TypeScript throughout. Deployed on Netlify.

Site URL: `https://unitatargentona.cat`

## Astro component patterns

- Component frontmatter is TypeScript; destructure from `Astro.props`.
- Always define `interface Props` for component props.
- Use `import type { ... }` for type-only imports.
- Use `class:list={{ key: condition }}` for conditional classes, not string interpolation.
- Scope all styles in `<style>` blocks inside the `.astro` file. Avoid global class names.

```astro
---
interface Props {
  headingLevel: 2 | 3
}
const { headingLevel: Heading = 'h2' } = Astro.props
---

<Heading class="title">{title}</Heading>
<style>
  .title {
    font-size: 1.5rem;
  }
</style>
```

## Content collections

Two collections defined in `src/content.config.ts`:

| Collection | Schema fields                                 | File naming                |
| ---------- | --------------------------------------------- | -------------------------- |
| `blog`     | `title: string`, `date: Date`                 | `YYYY-MM-DD-slug.md`       |
| `agenda`   | `title: string`, `date: Date`, `lloc: string` | `YYYY-MM-DD-HH-MM-slug.md` |

- Draft files start with `_` (excluded by glob loader automatically).
- Sort blog posts by `id` descending (newest first): `allPosts.sort((a, b) => b.id.localeCompare(a.id))`.
- Filter agenda events using `data.date` comparison; use the helpers in `src/utils.ts`.

## Images (Cloudinary)

- All images are hosted on Cloudinary under the `Unitat/` prefix in cloud `albertvila`.
- Image IDs are typed via `CloudinaryImageId` in `src/misc/cloudinary.ts` — add new IDs there.
- Always render images via the `<CloudinaryImage>` component, not raw `<img>` tags.
- Provide `resizeWidth` and `resizeHeight` to get fill-cropped images; the component doubles dimensions for 2× DPR automatically.

## Routing & build

- `build.format: 'file'` — pages output as `page.html`, not `page/index.html`. No trailing slashes in URLs.
- URL structure: `/blog/` is a listing page; individual posts use dynamic `[slug]` routes.

## CSS conventions

- Custom properties are defined in `src/styles/global.css`; use them instead of hard-coded values.
- Keep CSS simple, responsive, and mobile-first.
- Avoid adding new global utility classes.

## TypeScript & tooling

- Run `npm run check` (runs `astro check && tsc --noEmit`) before committing.
- Format with `npm run format` (Prettier + `prettier-plugin-astro`).
- Do not add new npm dependencies without a clear need — the project is intentionally lightweight.
- Use helpers from `src/utils.ts` and constants from `src/constants.ts` before introducing duplicates.

## Content language

- All content and UI text is in Catalan.
- Preserve the informal, community-focused tone of existing blog posts.
