import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Starship {
    @Field(() => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    length: number;
  }