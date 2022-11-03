FROM node:16 as prod
USER node
WORKDIR /usr/src/app
COPY --chown=node:node . .

RUN npm ci && npm run build

FROM nginx:latest AS proxy-server
EXPOSE 80
COPY --chown=nginx:nginx --from=prod /usr/src/app/build /usr/share/nginx/html