FROM node:16-alpine as builderFrontend

WORKDIR /build/frontend

COPY /frontend/package.json .
COPY /frontend/package-lock.json .
COPY /frontend/tsconfig.json .
COPY /frontend/svelte.config.js .
COPY /frontend/.npmrc .

COPY /frontend/static ./static
COPY /frontend/src ./src

RUN ls -lah

RUN npm ci

RUN npm run build

FROM node:16-alpine as builderBackend

WORKDIR /build/backend

COPY /backend/package.json .
COPY /backend/package-lock.json .
COPY /backend/tsconfig.json .

RUN npm ci

COPY /backend/src ./src

RUN npm run build

FROM node:16-alpine as runner

WORKDIR /app

COPY --from=builderFrontend /build/frontend/static ./frontend/static
COPY --from=builderFrontend /build/frontend/dist ./frontend/dist
COPY --from=builderFrontend /build/frontend/package.json ./frontend
COPY --from=builderFrontend /build/frontend/package-lock.json ./frontend
COPY --from=builderFrontend /build/frontend/tsconfig.json ./frontend
RUN cd /app/frontend && npm install --production

COPY --from=builderBackend /build/backend/dist ./backend/dist
COPY --from=builderBackend /build/backend/package.json ./backend
COPY --from=builderBackend /build/backend/package-lock.json ./backend
RUN cd /app/backend && npm install --production

