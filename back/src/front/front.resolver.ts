import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateFrontDto } from './dtos/create-front';
import { Front } from './entities/front.entity';
import { FrontService } from './front.service';

@Resolver((of) => Front)
export class FrontResolver {
  constructor(private readonly frontService: FrontService) {}
  @Query((returns) => [Front])
  myFront(): Promise<Front[]> {
    return this.frontService.getAll();
  }
  @Mutation((returns) => Boolean)
  createFront(@Args() createFront: CreateFrontDto): boolean {
    return true;
  }
}
