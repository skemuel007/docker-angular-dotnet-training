# Project Type a .dotnet web api

## Create a console project with the following command

### Step 1:

```bash
mkdir project-tye && cd project-tye
```

### Setp 2:

```bash
dotnet new sln
```

## Dockerfile build

```bash
docker build -t skemuel007/moviesapi:dev -f ./MoviesAPI/Dockerfile .
```

## Docker run

```bash
docker run -d -p 5001:80 skemuel007/moviesapi:dev
```

### View files in container

```bash
docker ps 

docker exec -it <containerid> [bash|bin/sh]
```