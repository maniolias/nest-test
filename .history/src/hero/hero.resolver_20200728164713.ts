import { Resolver, Query } from '@nestjs/graphql';
import { Character } from './types/character.type';

@Resolver('Hero')
export class HeroResolver {
  @Query(
    /* istanbul ignore next */
    (): typeof Character => Character,
  )
  async hero(episode: Episode): Promise<Character> {
    return;
  }
}
