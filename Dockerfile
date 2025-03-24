FROM node:20.12-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./

RUN yarn install

COPY src ./src

RUN yarn run build

CMD ["yarn", "start"]