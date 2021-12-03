#!/bin/bash
# Utworzenie sieci
if [ ! "$(docker network ls -q -f name=jk_sandbox)" ]
then
    docker network create jk_sandbox
fi

# Uruchomienie reverse proxy
if [ ! "$(docker ps -q -f name=reverse_proxy)" ]
then
  docker run -d --rm -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro --net jk_sandbox --name reverse_proxy jwilder/nginx-proxy
fi

# Uruchamianie aplikacji frontendowej
cd docker || exit 0
docker-compose up -d
docker-compose exec angular bash
