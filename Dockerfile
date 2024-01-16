FROM node:18-alpine AS svelteytdl

WORKDIR /app

COPY . .
# This has to be changed asap, Skeleton currently has no svelte 5 support :sadge:
RUN npm i --legacy-peeer-deps

RUN npm run build

RUN rm -rf src/ static/ docker-compose.yml

USER admin:admin

CMD ["node","build/index.js"]