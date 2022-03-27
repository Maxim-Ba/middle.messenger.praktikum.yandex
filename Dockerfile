FROM ubuntu:18.04
RUN apt update && apt install -y nodejs && apt install -y npm
CMD node -v
