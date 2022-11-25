import Fastify from "fastify";

import secretGroups from "./data/secretGroups.mjs";
import secretGroup from "./data/secretGroup.mjs";

const fastify = Fastify({ logger: true });

fastify.get(
  "/secrets-manager/api/v1/organizations/:orgId/environments/:envId/secretGroups/",
  (_, reply) => {
    reply.send(secretGroups);
  }
);

fastify.get(
  "/secrets-manager/api/v1/organizations/:orgId/environments/:envId/secretGroups/:id",
  (_, reply) => {
    reply.send(secretGroup);
  }
);

fastify.get(
  "/secrets-manager/api/v1/organizations/:orgId/environments/:envId/secretGroups/:id/tlsContexts",
  (_, reply) => {
    reply.send([]);
  }
);

fastify.listen({ port: 9090 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
