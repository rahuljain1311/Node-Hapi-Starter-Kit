// require( 'babel-core/register' );
const server = require('./createServer');

server((err, server) => {

    if (err) {
        throw err;
    }
    server.start(() => {

        console.log('Started the plot device on port ' + server.info.port);
    });
});
