FROM node:12-alpine
RUN apk add --update npm
WORKDIR /
ADD ./api.js ./api.js
RUN npm install mysql express cors body-parser
CMD ["node","api.js"]
