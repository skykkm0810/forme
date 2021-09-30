import { Module } from '@nestjs/common';
import { FrontResolver } from './front.resolver';

@Module({
  providers: [FrontResolver],
})
export class FrontModule {}
