docker rm layer

docker build -t base-layer .

docker run --name layer base-layer

docker cp layer:layer.zip . 