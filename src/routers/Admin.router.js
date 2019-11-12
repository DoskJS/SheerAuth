'use strict';
const HealthCheckController = require('../controllers/HealthCheck.controller');

const AdminRouter = (fastify, options, next) => {
    fastify.route({
        method: 'GET',
        url: '/healthcheck',
        handler: HealthCheckController,
        schema: {
            response: {
                200: {
                    type: 'string',
                },
            },
        },
    });

    next();
};

module.exports = exports = HealthCheckRoutes;