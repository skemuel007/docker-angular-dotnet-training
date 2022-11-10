
# Dockerizing a Exercise 2 HTML
## Build Dockerfile

```bash
docker build -t skemuel007/simple-html:v2 .

or 

docker build -t skemuel007/simple-html:v2 -f exercise2_html/Dockerfile .
```

## Run the image
```bash
docker run -d --name simple-html -p 3008:80 skemuel007/simple-html:v2

```

## List running containers

```bash
docker ps
```