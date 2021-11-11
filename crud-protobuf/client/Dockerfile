FROM node:10-alpine

RUN mkdir -p /home/node/client/node_modules && chown -R node:node /home/node/client

WORKDIR /home/node/client

COPY package*.json ./

COPY client.js ./
COPY crudpb_grpc_web_pb.js ./
COPY crudpb_pb.js ./

# USER node

RUN npm install

RUN npx webpack client.js

EXPOSE 8081