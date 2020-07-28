import { Field, ID } from '@nestjs/graphql';

export class Starship {
    @Field(() => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    length: number;
  }