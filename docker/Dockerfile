# ------------------ Builder -------------------
FROM node:lts-alpine as Builder

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY . .

RUN pnpm i --frozen-lockfile


# ------------------ Runner --------------------
FROM node:lts-alpine as Runner

WORKDIR /app

# next.js server
EXPOSE 3000
# fastify server
EXPOSE 4000


# PM2
