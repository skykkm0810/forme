import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { FrontModule } from './front/front.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    FrontModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
