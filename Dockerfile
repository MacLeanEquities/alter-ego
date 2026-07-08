FROM node:20-alpine
WORKDIR /app
COPY dist ./dist
COPY server.mjs ./
EXPOSE 3000
CMD ["node", "server.mjs"]
