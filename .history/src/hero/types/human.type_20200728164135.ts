import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Character, Episode } from './character.type';

@ObjectType()
export class Human implements Character {
  id: string;
  name: string;
  friends: [Character];
  appearsIn: [Episode];
}
