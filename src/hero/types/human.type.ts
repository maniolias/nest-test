import { Field, ObjectType } from '@nestjs/graphql';

import { Character, Episode } from './character.type';
import { Starship } from './starship.type';

@ObjectType()
export class Human implements Character {
  id: string;
  name: string;
  friends: Character[];
  appearsIn: Episode[];

  @Field(() => [Starship])
  starships: Starship[];

  @Field()
  totalCredits: number;

  constructor(
    id: string,
    name: string,
    friends: Character[],
    appearsIn: Episode[],
    starships: Starship[],
    totalCredits: number,
  ) {
      this.id = id;
      this.name = name;
      this.friends = friends;
      this.appearsIn = appearsIn;
      this.starships = starships;
      this.totalCredits = totalCredits;
  }
}
