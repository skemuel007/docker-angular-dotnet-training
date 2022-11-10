
# Dockerizing a Simple HTML File
## Build Dockerfile

```bash
docker build -t skemuel007/simple-html:v1 .
```

## Run the image
```bash
docker run -d --name simple-html -p 3008:80 skemuel007/simple-html:v1
```

## List running containers

```bash
docker ps
```