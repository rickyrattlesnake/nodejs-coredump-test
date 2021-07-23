FROM node:14.16.1-alpine3.13

RUN apk update \
  && apk add \
  autoconf \
  automake \
  file \
  g++ \
  gcc \
  gnupg \
  bash \
  git \
  libgcc \
  libpng-dev \
  libtool \
  linux-headers \
  make \
  nasm \
  gdb \
  lldb \
  lldb-dev

# RUN mkdir ~/.npm-global \
#   && npm config set prefix '~/.npm-global'

# ENV PATH "~/.npm-global/bin:$PATH"

RUN npm --unsafe-perm install -g llnode

COPY ./ /srv/
WORKDIR /srv

ENTRYPOINT ["npm", "start"]
