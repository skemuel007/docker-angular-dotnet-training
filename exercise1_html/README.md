
# Dockerizing a Simple HTML File
## Build Dockerfile

```bash
docker build -t skemuel007/simple-html:v1 .

or 

docker build -t skemuel007/simple-html:v1 -f exercise1_html/Dockerfile .
```

## Run the image
```bash
docker run -d --name simple_html_v1 -p 3010:80 skemuel007/simple-html:v1
```

## List running containers

```bash
docker ps
```

## Run kubernetes deployment
```bash
kubectl apply -f deployment.yaml
```

## Display information about the Deployment:

```bash
kubectl get deployments htm11
kubectl describe deployments html1
```

## Display information about your ReplicaSet objects:

```bash
kubectl get replicasets
kubectl describe replicasets
```