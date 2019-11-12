'use strict';
const HealthCheckController = require('../controllers/HealthCheck.controller');

const HealthCheckResponseScehma = {
  200: {
    type: 'object',
    properties: {
      status: 'string'
    }
  }
}

const HealthCheckRoutes = (fastify, options, next) => {
  fastify.route({
    method: 'GET',
    url: '/healthcheck',
    handler: HealthCheckController.GET,
    schema: {
      response: HealthCheckResponseScehma,
    },
  });

  next();
};

module.exports = exports = HealthCheckRoutes;