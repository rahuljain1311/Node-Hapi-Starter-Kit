# Node-Hapi-Starter-Kit

This boilerplate is based on Nodejs with Hapi server framework. It is complete with a sample running test.

This is created primarily to encourage using Docker while Development. Use one of the docker integrations (mysql or postgres) 
below to proceed. If one is determined otherwise please make the config changes in `./config/config.js` file

Eg: 
```
'local_mysql': {
        'username': 'root',
        'password': 'password',
        'database': 'article',
        'host': 'localhost',
        'dialect': 'mysql',
        seederStorage: 'sequelize',
        operatorsAliases: false
    },
```

Then do `npm install` to start up.

To start the server do `NODE_ENV=local_mysql npm start`
(This will start the server at port 5000).

You can now hit the test API at localhost:5000/api/hello/2

It comes with a Hapi-Swagger (https://github.com/glennjones/hapi-swagger) package for API Documentation. 
Demo? After running the server open the link `localhost:5000/documentation`

## Docker Integration

1. `docker-compose up -d`

2. Any command available in package.json can be run directly. For eg. to drop the database run `docker-compose run app npm run drop-localPSQL`. Similarly `migrate-localPSQL`.

3. To see logs of any of these containers first choose the container (app or db).   
    a. Do `docker-compose ps` to list all the containers for THIS particular project. 
    b. Choose the container name.
    c. `docker logs -ft --details --since 5m <Container_name>` . See docker logs -h for more info.

4. Even though hot reloading will work , it be possible that you need to restart your server, or build your containers again using a different configs. Do the steps below to rebuild: 
    a. `docker-compose down`
    b. To build again do `docker-compose up --build -d`


## PostgresSQL is working fine:
1. `docker-compose up --build -d`
2. `docker-compose run app npm run migrate-localPSQL`
3. Open `http://localhost:5000/api/hello/2`

## MySQL is working fine: (Uncomment mysql specific lines in `docker-compose.yml` file at 3 places and comment postgres specific lines)
1. `docker-compose up --build -d`
2. `docker-compose run app npm run migrate-localMSQL`
3. Open `http://localhost:5000/api/hello/2`

## Corrupt mysql or postgres database [Delete docker volume]: 
[Warning: This will remove all the unclaimed volumes in docker. Please prune the specific volume of your application only!]
1. `docker-compose down`
2. `docker volume prune` 
