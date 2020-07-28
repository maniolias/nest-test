import { Field, ID, InterfaceType, registerEnumType } from '@nestjs/graphql';

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
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Character])
  friends: [Character];

  @Field(() => [Episode])
  appearsIn: [Episode];
}
