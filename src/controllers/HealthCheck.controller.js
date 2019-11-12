'use strict';

const HealthCheckController = {
  GET: (request, reply) => {
    reply.send({
      status: 'OK'
    });
  }
}

module.exports = exports = HealthCheckController;
