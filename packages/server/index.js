'use strict';
const Hapi = require('@hapi/hapi');
const books = require('./router/books');
const kill = require('kill-port')
const notFound = require('./router/not-found');
const path = require('path');

const config = require('dotenv').config();

if (config.error) {
  throw config.error
}

const main = async () => {
    const port = process.env.PORT || 3000;

    try {
        await kill(port, 'tcp');
    } catch (err) {
        console.error(err);
    }

    const server = Hapi.server({
        port,
        host: 'localhost'
    });

    server.route([
      {
        method: 'GET',
        path: '/',
        options: {
            handler: async (request, h) => {
                return h.response('Hello from Proxy').code(200);
            }
        }
    },
      ...books,
      notFound,
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);

    const gracefullyStopServer = () => {
        console.info('Process has been terminated');

        server.stop()
        process.exit();
    };

    process.on('unhandledRejection', (err) => {
        gracefullyStopServer();
        console.error(err);
        process.exit(1);
    });

    process.on('SIGTERM', gracefullyStopServer);

    process.on("SIGINT", gracefullyStopServer);
};

main();