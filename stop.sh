#!/bin/bash
# Wyłączanie aplikacji frontendowej
cd docker || exit 0
docker-compose down -v
cd ../..

# Zatrzymanie reverse proxy
if [ "$(docker ps -q -f name=reverse_proxy)" ]
then
    docker stop reverse_proxy
fi

# Usunięcie sieci
if [ "$(docker network ls -q -f name=mf_mpa)" ]
then
    docker network rm mf_mpa
fi

cd - || exit 0
