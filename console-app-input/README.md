# Docker for Dotnet

## Create a console project with the following command

### Step 1:

```bash
mkdir console-app-input && cd console-app-input
```

### Setp 2:

```bash
dotnet new console
```

## Build image


Use the second when folder error comes up or simple delete the folder in console-input-app int 
```bash
docker build -t skemuel007/console-input-app:dev .

or 

docker build -t skemuel007/console-input-app:dev -f ./console-input-app/Dockerfile  .

or 

docker build --tag skemuel007/console-input-app:dev --no-cache -f ./console-input-app/Dockerfile .
```

## To clean cache

```bash
docker builder prune -af
```

## To clean dangling image

```bash
docker system prune
```

## Run the image

```bash
docker run -i skemuel007/console-input-app:dev
```
