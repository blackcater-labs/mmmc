<picture>
  <img alt="WIP" src="./assets/WIP.png">
</picture>

<br/>
<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/banner-dark.png">
  <img alt="Mmmc Banner" src="./assets/banner-light.png">
</picture>

<h2 align="center">Manhua + Manga + Manhwa + Comic = Mmmc</h2>

<p align="center">
  <a href="https://github.com/blackcater-labs/mmmc">
   <img src="https://img.shields.io/github/downloads/blackcater-labs/mmmc/total?color=%23dedede&logoColor=%23333333&style=for-the-badge" alt="download counts" />
  </a>
  <a href="https://github.com/blackcater-labs/mdx-rs/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/blackcater-labs/mmmc?style=for-the-badge&color=%23dedede&logoColor=%23333333" alt="license" />
  </a>
</p>

**👉 English** | [🇨🇳 简体中文](./README.zh-CN.md)

## ✨ Features

- [x] **🌈 Beautiful UI**.
- [x] **📱 Responsive design**.
- [x] **🌏 Internationalization**.
- [x] **🧑‍💻 TypeScript**.
- [x] **🗄️ Self-hosted**.

## 👋 Getting Started

This project is a monorepo:

- `apps/server`: server application for Mmmc, based on [Bun](https://bun.sh/).
- `apps/web`: web application for Mmmc, based on [Next.js](https://nextjs.org/).
- `packages/storybook`: Storybook for developing UI components, based on [Storybook](https://storybook.js.org/).
- `packages/theme`: Tailwind CSS theme for Mmmc, based on [nextui](https://nextui.org/).

> [!IMPORTANT]
> Project's package manager is [Bun](https://bun.sh/), so you need to install it first.

```bash
bun install # install dependencies
bun dev     # start local development
```

After that, you can visit `http://localhost:3000` to view the web application. The server application is running on `http://localhost:4000`.

You can visit graphql playground on `http://localhost:3000/api/graphql` or `http://localhost:4000/api/graphql`.

***For more information, please read package's README file.***

## 🤝 Contribution

Please read the **[contributing guide](./docs/Contributing%20Guide.md)** and let's build **`mmmc`** together.

## ♻️ License

[MIT License](./LICENSE)
