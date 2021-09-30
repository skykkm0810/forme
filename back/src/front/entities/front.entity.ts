import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Front {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  name: string;

  @Field((type) => Boolean, { nullable: true })
  @Column()
  isFront?: boolean;

  @Field((type) => Boolean)
  @Column()
  isWork?: boolean;

  @Field((type) => Boolean)
  @Column()
  isPrivate?: boolean;

  @Field((type) => String)
  @Column()
  whatLang?: string;
}
