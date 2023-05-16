import { Injectable } from '@nestjs/common';

@Injectable()
export class LambdaTwoService {
  getHello(): string {
    return 'Hello World from lambda 2 !';
  }
}
