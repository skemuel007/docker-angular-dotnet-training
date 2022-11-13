# Build stage
FROM node:alpine as node

WORKDIR /src

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# Run Stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /src/dist/movies-front-end /usr/share/nginx/html/movies