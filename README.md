# Node-Hapi-Starter-Kit

This boilerplate is based on Nodejs with Hapi server framework. It is complete with a sample running test.

Just do `npm install` to start up.

To start the server do `npm start`
(This will start the server at port 5000).

You can now hit the test API at localhost:5000/api/hello

It comes with a Hapi-Swagger (https://github.com/glennjones/hapi-swagger) package for API Documentation. 
Demo? After running the server hit the link `localhost:5000/documentation`

Lint is already installed and checked. Type in `npm run lint` to prevent linting errors

For validating the request parameters and the response given by the API, I am using Joi Schema (https://www.npmjs.com/package/joi)

Dont forget hot reloading! This will make your life super easy :D (https://www.npmjs.com/package/nodemon)

To run the test cases type `npm run test`. It uses code and lab (https://www.npmjs.com/package/code) and gives test coverage as well.

How can I forget logging. Using good-console for colorful logs (Happy Debugging :P)

And ofcourse if you want to improve, PRs are always welcome :)



Docker Integration

1. `docker-compose up -d`

2. Any command available in package.json can be run directly. For eg. to drop the database run `docker-compose run app npm run drop-localPSQL` . Similarly `migrate-localPSQL` and `create-localPSQL`.

3. To see logs of any of these containers first choose the container (app or db).   
    a. Do `docker-compose ps` to list all the containers for THIS particular project. 
    b. Choose the container name.
    c. `docker logs -ft --details --since 5m <Container_name>` . See docker logs -h for more info.

4. Even though hot reloading will work , it be possible that you need to restart your server, or build your containers again using a different configs. Do the steps below to rebuild: 
    a. `docker-compose down` Or to build again do `docker-compose up --build`
    b. `docker-compose up -d`



