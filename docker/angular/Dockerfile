FROM node:lts

# update and install socat for port forwarding 80 -> 4200
RUN apt-get update && \
    apt-get install socat -y

# install angular cli
RUN npm install -g @angular/cli

# setup workdir
WORKDIR app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH "/app/node_modules/.bin:$PATH"
