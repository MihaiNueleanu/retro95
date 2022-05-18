FROM node:16-alpine as builder

WORKDIR /build

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY svelte.config.js .
COPY .npmrc .

COPY static static
COPY src src

RUN npm ci


RUN npm run build

FROM node:16-alpine as runner

WORKDIR /app

COPY --from=builder /build/static static
COPY --from=builder /build/dist dist
COPY --from=builder /build/package.json .
COPY --from=builder /build/package-lock.json .
COPY --from=builder /build/tsconfig.json .

CMD ["node", "dist"]