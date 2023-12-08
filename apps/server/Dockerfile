# ----------------- BUILD  -----------------
FROM node:lts-alpine as build

WORKDIR /app

COPY . .

ENV LOGS_DIR=/data/logs
ENV UPLOADS_DIR=/data/uploads
ENV DB_DIR=/data/db
ENV COMICS_DIR=/data/comics

RUN mkdir -p /data/logs && \
    mkdir -p /data/uploads && \
    mkdir -p /data/db && \
    mkdir -p /data/comics && \
    pnpm install --frozen-lockfile && \
    pnpm build && \
    pnpm migrate:deploy

# ----------------- PRODUCTION  -----------------
FROM node:lts-alpine as production

WORKDIR /app

ENV LOGS_DIR=/data/logs
ENV UPLOADS_DIR=/data/uploads
ENV DB_DIR=/data/db
ENV COMICS_DIR=/data/comics

COPY --from=build /app/dist dist
COPY --from=build /app/package.json .
COPY --from=build /app/pnpm-lock.yaml .
COPY --from=build /app/.env .
COPY --from=build /app/.env.production .
COPY --from=build /app/nest-cli.json .
COPY --from=build /data /data

RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000

VOLUME [ "/data/logs", "/data/uploads", "/data/db", "/data/comics" ]

CMD ["pnpm", "run", "start:prod"]
