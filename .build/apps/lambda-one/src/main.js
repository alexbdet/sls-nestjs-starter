"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const lambda_one_module_1 = require("./lambda-one.module");
const lambda_one_service_1 = require("./lambda-one.service");
async function bootstrap() {
    return await core_1.NestFactory.createApplicationContext(lambda_one_module_1.LambdaOneModule);
}
async function handler(event, context) {
    const app = await bootstrap();
    const appService = app.get(lambda_one_service_1.LambdaOneService);
    return appService.getHello();
}
exports.handler = handler;
//# sourceMappingURL=main.js.map