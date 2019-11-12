'use strict';
const AuthController = require('../controllers/Auth.controller');

const AuthResponseScehma = {
  200: {
    type: 'object',
    properties: {
      token: {
        type: 'string'
      }
    }
  }
}

const AuthRouter = (fastify, options, next) => {
  fastify.route({
    method: 'POST',
    url: '/authenticate',
    handler: AuthController.POST,
    schema: {
      response: AuthResponseScehma,
    },
  });

  next();
};

module.exports = exports = AuthRouter;