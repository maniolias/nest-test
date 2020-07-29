import { Field, InterfaceType, registerEnumType } from '@nestjs/graphql';

import { CustomID } from '../scalars/customID.scalar';
import { Human } from './human.type';
import { Droid } from './droid.type';

export enum Episode {
  NEWHOPE,
  EMPIRE,
  JEDI,
}

registerEnumType(Episode, {
  name: 'Episode',
});

@InterfaceType({
  resolveType: (character)=> {
    if (character.totalCredits) {
      return Human;
    } else {
      return Droid;
    }
  },
})
export abstract class Character {
  @Field(() => CustomID)
  id: CustomID;

  @Field()
  name: string;

  @Field(() => [Character])
  friends: Character[];

  @Field(() => [Episode])
  appearsIn: Episode[];
}
