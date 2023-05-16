import { NestFactory } from '@nestjs/core';
import { LambdaOneModule } from './lambda-one.module';
import { LambdaOneService } from './lambda-one.service';

async function bootstrap() {
  return await NestFactory.createApplicationContext(LambdaOneModule);
}

export async function handler(event, context){
  const app = await bootstrap();
  const appService = app.get(LambdaOneService);

  return appService.getHello();
}
