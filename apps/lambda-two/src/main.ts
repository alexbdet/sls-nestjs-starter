import { NestFactory } from '@nestjs/core';
import { LambdaTwoModule } from './lambda-two.module';
import { LambdaTwoService } from './lambda-two.service';

async function bootstrap() {
  return await NestFactory.createApplicationContext(LambdaTwoModule);
}

export async function handler(event, context) {
  const app = await bootstrap();
  const appService = app.get(LambdaTwoService);

  return appService.getHello();
}
