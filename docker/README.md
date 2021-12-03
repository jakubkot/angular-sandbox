## Uruchomienie aplikacji

Do uruchomienia projektu potrzebujemy lokalnie zainstalowanych narzędzi:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

W projekcie zostały zdefiniowane następujące kontenery:

- `node`

Aby uruchomić projekt należy:

1. Stworzyć sieć wewnętrzną do komunikacji kontenerów `docker network create mf_mpa`
2. Zdefiniowanie virtual hosta w pliku `/etc/hosts`:
    ```bash
    127.0.0.1    mpa.mf.loc
    ```
3. Uruchomić kontener z reverse proxy
    ```bash
    docker run -d --rm -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro --net mf_mpa --name reverse_proxy jwilder/nginx-proxy
    ```
4. Z pliku **.env.default** tworzymy plik **.env**
    ```bash
    cp .env.default .env
    ```
5. Uruchomić kontenery z folderu `docker`
    ```bash
    docker-compose up -d
    ```
