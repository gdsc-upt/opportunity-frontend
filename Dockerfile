FROM node:lts-alpine as builder

WORKDIR /app

COPY ./ /app/

RUN npm ci
RUN npm run build:ssr

# ------------------RUNTIME-----------------------
FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/dist /app/dist

# link image with github repo
LABEL org.opencontainers.image.source=https://github.com/dsc-upt/opportunity-frontend

CMD node dist/server/main
