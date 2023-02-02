FROM node:14.21.2

WORKDIR /app

COPY . .

RUN npm ci

CMD ["node", "index.js"]
