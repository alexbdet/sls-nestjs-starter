"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const lambda_two_module_1 = require("./lambda-two.module");
const lambda_two_service_1 = require("./lambda-two.service");
async function bootstrap() {
    return await core_1.NestFactory.createApplicationContext(lambda_two_module_1.LambdaTwoModule);
}
async function handler(event, context) {
    const app = await bootstrap();
    const appService = app.get(lambda_two_service_1.LambdaTwoService);
    return appService.getHello();
}
exports.handler = handler;
//# sourceMappingURL=main.js.map