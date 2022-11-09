# WEB React Ts GraphQL

WEB with React, Typescript and GraphQL.

## Get Started

Install

```bash
yarn
```

Run Dev

```bash
yarn dev
```

Build

```bash
yarn build
```

Deploy in docker container

```bash
yarn build
docker build -t react .
```

Run container

```bash
docker run -dit -p 80:80 --name=web react
```

Go to http://localhost