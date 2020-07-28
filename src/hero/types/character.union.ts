import { createUnionType, registerEnumType } from '@nestjs/graphql';
import { Droid } from './droid.type';
import { Human } from './human.type';

export enum Episode {
  NEWHOPE,
  EMPIRE,
  JEDI,
}

registerEnumType(Episode, {
  name: 'Episode',
});

export const CharacterUnion = createUnionType({
  name: 'Character',
  types: () => [Droid, Human],
});

export interface Character {
  id: string;
  name: string;
  friends: Character[];
  appearsIn: Episode[];
}