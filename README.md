<p align='center'>
  <img src='https://repository-images.githubusercontent.com/442005408/3f8d7fed-9d3f-45c8-bcd5-0fa64e9ac535' alt='Vue.js starter template' width='600'/>
</p>

# Impact Gutters Official Website
A website built for the Altanta-based company, Impact Gutters.
Single-page webapp.

## Getting Started

Install and start dev server

```sh
pnpm install
pnpm run dev
```

## Deployment

### Github pages

The default github action will build to `gh-page` when pushing on `main` branch.

For a project page, the base path of the repository must be specified. Add the following secret in the Github repository Settings > Secrets > Actions

| Name                        | Value                    |
| --------------------------- | ------------------------ |
| VITE_BASE_PUBLIC_PATH       | `/repository-name/`      |
