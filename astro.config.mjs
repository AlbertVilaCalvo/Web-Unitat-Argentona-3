import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://unitatargentona.cat',
  build: {
    // We don't want trailing slashes (ie /llista/). Netlify adds a trailing
    // slash if we generate /llista/index.html instead of /llista.html, see
    // https://answers.netlify.com/t/support-guide-how-can-i-alter-trailing-slash-behaviour-in-my-urls-will-enabling-pretty-urls-help/31191
    format: 'file',
    // TODO check CSS inlining - https://astro.build/blog/astro-260/#css-inlining
    //  https://github.com/withastro/roadmap/blob/main/proposals/0036-inline-stylesheets.md
    //  inlineStylesheets: "auto",
  },
  legacy: {
    collections: true,
  },
})
