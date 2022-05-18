FROM node:16-alpine as builder

WORKDIR /build

COPY package.json .
COPY package-lock.json .


COPY tsconfig.json .
COPY svelte.config.js .
COPY .npmrc .

RUN npm ci

COPY static static
COPY src src

RUN npm run build

FROM node:16-alpine as runner

WORKDIR /app

COPY --from=builder static static
COPY --from=builder dist dist
COPY --from=builder package.json .
COPY --from=builder package-lock.json .
COPY --from