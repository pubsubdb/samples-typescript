/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types */
import { FastifyInstance } from 'fastify';
import path from 'path';
import fs from 'fs';

export const registerWebappRoutes = (fastify: FastifyInstance, _opts: Object) => {
  //logger.info('Registering webapp routes');

  //configure static asset directory for webapp
  fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '../../webapp/dist/assets'),
    prefix: '/assets/' // optional: default '/'
  });

  // Function to read and send the index.html file
  function getIndexFile() {
    const indexPath = path.join(__dirname, '../../webapp/dist/index.html');
    return fs.readFileSync(indexPath, 'utf-8');
  }

  // Serve index.html file for all other routes
  fastify.get('*', async (request, reply) => {
    reply.type('text/html');
    return getIndexFile();
  });
};
