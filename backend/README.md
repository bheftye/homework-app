# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

## Migrations
To run migrations with TypeORM you need to call with

```
node ./node_modules/typeorm/cli.js migration:<command> <params>
```