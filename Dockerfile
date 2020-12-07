FROM node:lts-alpine

WORKDIR /app

COPY dist /app/dist

CMD node dist/server/main
