import { Field, ObjectType } from '@nestjs/graphql';

import { Character, Episode } from './character.type';
import { CustomID } from '../scalars/customID.scalar';

@ObjectType({
  implements: [Character],
})
export class Droid implements Character {
  id: CustomID;
  name: string;
  friends: Character[];
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
