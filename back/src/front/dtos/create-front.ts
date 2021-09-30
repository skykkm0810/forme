import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateFrontDto {
  @Field((type) => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  @IsBoolean()
  isFront?: boolean;

  @Field((type) => Boolean)
  @IsBoolean()
  isWork?: boolean;

  @Field((type) => Boolean)
  @IsBoolean()
  isPrivate?: boolean;
}
