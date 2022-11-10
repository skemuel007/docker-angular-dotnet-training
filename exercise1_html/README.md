
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

## Create a Service object that exposes the deployment:

```bash
kubectl expose deployment html1 --type=NodePort --name=html1-service
```

## Display information about the Service:

```bash
kubectl describe services html1-service
```

Make a note of the NodePort value for the service.

## List pods running in html1

```bash
kubectl get pods --selector="run=html1" --output=wide
```

## Get cluster info

```bash
kubectl cluster-info
```

## Use the node address and node port to access the Hello World application:

```bash
curl http://<public-node-ip>:<node-port>
```

## To delete the Service, enter this command:

```bash
kubectl delete services example-service
```

## To delete the Deployment, the ReplicaSet, and the Pods that are running the Hello World application, enter this command:

```bash
kubectl delete deployment hello-world
```

