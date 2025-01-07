# Unitat

https://unitatargentona.cat

## Development

Run `npm run dev`, then open http://localhost:4321/.

## Deployment

The website is hosted at Netlify at https://unitatargentona.netlify.app.

Changes in the `main` branch in GitHub are published automatically.

## Update dependencies

```shell
npx @astrojs/upgrade@latest && \
npm i -D -E prettier@latest prettier-plugin-astro@latest typescript@latest
```

# Git pre-commit hook to run Prettier, Astro check and TypeScript

To run Prettier, Astro check and TypeScript checks on every commit, run `cp pre-commit .git/hooks`.

Note that the checks do not abort the commit, they only inform you of any issues found.
