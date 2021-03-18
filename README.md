[![codecov](https://codecov.io/gh/joaopedrocampos/typescript-fastify/branch/main/graph/badge.svg?token=P49Z2C7KG2)](https://codecov.io/gh/joaopedrocampos/typescript-fastify)

# Typescript Fastify

The goal of this project is to learn how to setup a basic Typescript application with Fastify


## Running application

To run the application you just need to have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/). With these you just need to run the following command

```
$ sudo docker-compose up
```

With this the project dependencies will be installed and the project gonna start running on port 8080.

## Running tests

To run the application tests you'll need to install it's dependencies

```
$ npm install
```

After installing the project dependencies all you need to do is run the tests command

```
$ npm run test
```

All application tests must be of the `.ts` extenstion and be inside a `/tests` folder. E.g.: `/tests/integration/healthcheckHandler.spec.ts`