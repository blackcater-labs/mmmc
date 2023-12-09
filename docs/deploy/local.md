# From Source

::: danger WARNING
THIS WAY IS NOT RECOMMENDED
:::

## Install Node.js

Mmmc is based on Node.js. You need to install [Node.js](https://nodejs.org/) first.

## Clone the repository

```bash
git clone git@github.com:blackcater-labs/mmmc.git
cd mmmc
```

## Install dependencies

Mmmc is a monorepo project. So pnpm is recommended to install dependencies.

### Install pnpm

```bash
npm install -g pnpm
```

### Install dependencies

```bash
pnpm i
```

## Environment Variables

You can change `apps/server/.env` file before running the project.

::: code-group

```ini [apps/server/.env]
# Port of the server, default is 3000
PORT=3000
```

:::

## Run server

::: code-group

```bash [Dev Mode]
pnpm run dev:server
```

```bash [Prod Mode]
pnpm run build:server
pnpm run start:server
```

:::
