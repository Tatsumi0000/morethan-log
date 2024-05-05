FROM node:18-bookworm

RUN apt update && \
  apt install npm -y && \
  apt remove yarn -y  

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#local
ENV YARN_VERSION 4.2.1
RUN yarn policies set-version $YARN_VERSION

WORKDIR /app
