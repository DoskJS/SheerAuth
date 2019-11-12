'use strict';
const AuthController = require('../controllers/Auth.controller');

const AuthRouter = (fastify, options, next) => {
    fastify.route({
        method: 'POST',
        url: '/authenticate',
        handler: AuthController.POST,
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