'use strict';
const Hello = require('../businessLogic/hello');
const HelloSchema = require('../joiSchema/hello');

module.exports = [
    {
        method: 'GET',
        path: '/hello/{id}',
        handler: ( request, reply ) => {

            reply( Hello.print(request.params.id) );
        },
        config: {
            tags: ['api'],
            validate: {
                params: HelloSchema.myHelloRequest
            },
            response: {
                schema: HelloSchema.myHelloResponse
            }
        }
    },
    {
        method: 'GET',
        path: '/hellohi',
        handler: ( request, reply ) => {

            reply( Hello.printStatic() );
        },
        config: {
            tags: ['api']
        }
    }

];
