import { Field, ObjectType, ID } from '@nestjs/graphql';

import { Character, Episode, CharacterUnion } from './character.union';

@ObjectType()
export class Droid implements Character {
  @Field(() => ID)
  id: string;
  
  @Field(() => String)
  name: string;

  @Field(() => [CharacterUnion])
  friends: Character[];

  @Field(() => [Episode])
  appearsIn: Episode[];

  @Field(() => String)
  primaryFunction: string;

  constructor(
    id: string,
    name: string,
    friends: Character[],
    appearsIn: Episode[],
    primaryFunction: string,
  ) {
      this.id = id;
      this.name = name;
      this.friends = friends;
      this.appearsIn = appearsIn;
      this.primaryFunction = primaryFunction;
  }
}
