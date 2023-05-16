import { Module } from '@nestjs/common';
import { LambdaTwoService } from './lambda-two.service';

@Module({
  imports: [],
  providers: [LambdaTwoService],
})
export class LambdaTwoModule {}
