import { Field, InterfaceType, registerEnumType } from '@nestjs/graphql';

import { CustomID } from '../scalars/customID.scalar';

export enum Episode {
  NEWHOPE,
  EMPIRE,
  JEDI,
}

registerEnumType(Episode, {
  name: 'Episode',
});

@InterfaceType()
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
