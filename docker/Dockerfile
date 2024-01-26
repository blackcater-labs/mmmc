# ------------------ Builder -------------------
FROM imbios/bun-node:latest as Builder

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY . .

RUN bun i


# ------------------ Runner --------------------
FROM imbios/bun-node:latest as Runner

WORKDIR /app

# next.js server
EXPOSE 3000
# bun server
EXPOSE 4000


# PM2
