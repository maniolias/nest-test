import { ObjectType, Field } from '@nestjs/graphql';

import { Character, Episode } from './character.type';
import { Starship } from './starship.type';

@ObjectType()
export class Human implements Character {
  id: string;
  name: string;
  friends: [Character];
  appearsIn: [Episode];

  @Field(() => [Starship])
  starships: [Starship];

  @Field()
  totalCredits: number;
}
