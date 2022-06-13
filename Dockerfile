FROM node:latest

WORKDIR /usr/app

COPY . .
RUN yarn

COPY . .

CMD yarn dev --host=0.0.0.0 --port=$PORT

EXPOSE $PORT