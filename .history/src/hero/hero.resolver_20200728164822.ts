import { Resolver, Query } from '@nestjs/graphql';
import { Character, Episode } from './types/character.type';

@Resolver('Hero')
export class HeroResolver {
    private heroes: Character[] = [
        
    ]
  @Query(
    /* istanbul ignore next */
    (): typeof Character => Character,
  )
  async hero(episode: Episode): Promise<Character> {
    return;
  }
}
