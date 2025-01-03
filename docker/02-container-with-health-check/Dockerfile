# Imagem de build
FROM node:21 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


# Imagem de produção
FROM node:21-alpine AS production

WORKDIR /app

COPY --from=build /app .
RUN npm ci --production

RUN apk add --no-cache curl

HEALTHCHECK --interval=10s --timeout=30s --start-period=5s --retries=3 CMD sh -c "curl -f http://localhost:3000/health || exit 1"

EXPOSE 3000

CMD ["node", "index.js"]
