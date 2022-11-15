# Build stage
# FROM node:alpine as node

# WORKDIR /src

# COPY package.json .
# RUN npm install

# COPY . .
# RUN npm run build

# Run Stage
# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=node /src/dist/movies-front-end /usr/share/nginx/html/movies

# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# stage 2
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d
COPY --from=node /app/dist/movies-front-end /usr/share/nginx/html