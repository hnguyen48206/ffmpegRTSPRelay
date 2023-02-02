FROM node:14.21.2

WORKDIR /app

COPY . .

CMD ["node", "index.js"]
