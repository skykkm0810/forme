import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Front } from './entities/front.entity';
import { FrontResolver } from './front.resolver';
import { FrontService } from './front.service';

@Module({
  imports: [TypeOrmModule.forFeature([Front])],
  providers: [FrontResolver, FrontService],
})
export class FrontModule {}
