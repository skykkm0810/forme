import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateFrontDto } from './dtos/create-front';
import { Front } from './entities/front.entity';

@Resolver((of) => Front)
export class FrontResolver {
  @Query((returns) => [Front])
  myFront(@Args('frontOnly') frontOnly: boolean): Front[] {
    return [];
  }
  @Mutation((returns) => Boolean)
  createFront(@Args() createFront: CreateFrontDto): boolean {
    return true;
  }
}
