"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const routes_1 = require("./healthcheck/api/routes");
const server = fastify_1.default({
    logger: true,
});
function registerRoutes() {
    server.register(routes_1.default);
}
function app() {
    registerRoutes();
    return server;
}
exports.default = app;
//# sourceMappingURL=app.js.map