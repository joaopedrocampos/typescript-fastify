"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = +process.env.PORT || 8080;
const fastify = app_1.default();
(function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fastify.listen(PORT, '0.0.0.0');
        }
        catch (err) {
            fastify.log.error(err);
            process.exit(1);
        }
    });
})();
//# sourceMappingURL=index.js.map