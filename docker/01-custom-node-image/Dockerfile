ARG NODE_VERSION=18

# Imagem de build
FROM node:${NODE_VERSION} AS build

ENV MESSAGE="Hello from Dockerfile"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


# Imagem de produção
FROM node:${NODE_VERSION}-alpine AS production

WORKDIR /app

COPY --from=build /app .
RUN npm ci --production

EXPOSE 3000

CMD ["node", "index.js"]
