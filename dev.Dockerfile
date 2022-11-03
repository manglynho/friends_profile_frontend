FROM node:16
USER node
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm install
ENV DEBUG=frontend:*
CMD npm run start