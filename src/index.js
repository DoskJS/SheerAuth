'use strict';
const Fastify = require('fastify'),
    app = Fastify(),
    dotenv = require('dotenv');

dotenv.config();

app.register(require('./routers/HealthCheck.router'));

app.listen(process.env.PORT || 8080);
