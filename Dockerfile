FROM node:lts-alpine

WORKDIR /app

COPY dist /app/dist

# link image with github repo
LABEL org.opencontainers.image.source=https://github.com/dsc-upt/opportunity-frontend

CMD node dist/server/main
