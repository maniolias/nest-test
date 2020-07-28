import { Field, ObjectType, ID } from '@nestjs/graphql';

import { Character, Episode, CharacterUnion } from './character.union';
import { Starship } from './starship.type';

@ObjectType()
export class Human implements Character {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;
  
  @Field(() => [CharacterUnion])
  friends: Character[];
  
  @Field(() => [Episode])
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
