import { Injectable } from '@nestjs/common';

@Injectable()
export class LambdaOneService {
  getHello(): string {
    return 'Hello World from lambda 1 !';
  }
}
