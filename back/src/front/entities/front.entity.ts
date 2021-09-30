import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Front {
  @Field((is) => String)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  isFront?: boolean;

  @Field((type) => Boolean)
  isWork?: boolean;

  @Field((type) => Boolean)
  isPrivate?: boolean;
}
