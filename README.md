# Remix + Strapi Setups

For information on Strapi, please refer to the following:

[https://qiita.com/nakamura0907/items/a8f564add089e0d60438](https://qiita.com/nakamura0907/items/a8f564add089e0d60438)

## Env

```
# Local environment Postgres setup information
DATABASE_CLIENT = postgres
DATABASE_HOST = 127.0.0.1
DATABASE_PORT = 5432
DATABASE_NAME = strapi
DATABASE_USERNAME = strapi_user
DATABASE_PASSWORD = strapi_password
DATABASE_SSL = false

# Docker information
DOCKER_POSTGRES_CONTAINER_NAME = strapi-sb
DOCKER_POSTGRES_VOLUME_NAME = strapi-db-store

STRAPI_READ_ONLY_TOKEN = "Strapi API Token"
```

## How to Setup

```bash
npm run setup:local:force
```

## How to Develop

```bash
npm run dev
```

## Tips

- When executing the `gen:frontend:client` command, a syntax error occurs in the API client code output to `apps/frontend/app/api/__generated__`. It is necessary to change `postUpload?id=` to `postUploadById`. 
