# Use Docker

## Install Docker

You need to install [Docker](https://www.docker.com/) first.

If you are using Windows or macOS, you can install [Docker Desktop](https://www.docker.com/products/docker-desktop).

If you are using Linux, you can install [Docker Engine](https://docs.docker.com/engine/install/).

## Pull image

```bash
docker pull blackcater/mmmc
```

::: details If You Are In China Mainland

[镜像加速](https://www.baidu.com/s?wd=Docker%20%E9%95%9C%E5%83%8F%E5%8A%A0%E9%80%9F) You can use some unofficial mirrors to speed up the download.

:::

## Run

```bash
docker run -d -p 3000:3000 blackcater/mmmc
```
