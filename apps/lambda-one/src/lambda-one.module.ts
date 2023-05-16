import { Module } from '@nestjs/common';
import { LambdaOneService } from './lambda-one.service';

@Module({
  imports: [],
  providers: [LambdaOneService],
})
export class LambdaOneModule {}
