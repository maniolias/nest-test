import { Resolver, Query, Args } from '@nestjs/graphql';
import { Character, Episode } from './types/character.type';

@Resolver('Hero')
export class HeroResolver {
  private heroes: Character[] = [];
  @Query(
    /* istanbul ignore next */
    (): [typeof Character] => [Character],
  )
  async hero(@Args('episode', { type: () => Episode }) episode: Episode): Promise<Character[]> {
    return this.heroes.filter(hero => hero.appearsIn.indexOf(episode) !== -1);
  }
}
