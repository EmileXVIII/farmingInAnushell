FROM node:12-alpine
RUN apk add --update npm
WORKDIR /
ADD ./server.js ./server.js
RUN npm install express http socket.io
CMD ["node","server.js"]