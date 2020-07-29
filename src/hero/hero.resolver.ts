import { Resolver, Query, Args } from '@nestjs/graphql';
import { Character, Episode } from './types/character.type';
import { Human } from './types/human.type';
import { Droid } from './types/droid.type';

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

  @Query(
    /* istanbul ignore next */
    (): [typeof Human] => [Human],
  )
  async humans(): Promise<Human[]> {
    return this.heroes.filter(hero => hero instanceof Human) as Human[];
  }

  @Query(
    /* istanbul ignore next */
    (): [typeof Droid] => [Droid],
  )
  async droids(): Promise<Droid[]> {
    return this.heroes.filter(hero => hero instanceof Droid) as Droid[];
  }
}
