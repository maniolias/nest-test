import { Resolver, Query, Args } from '@nestjs/graphql';
import { Human } from './types/human.type';
import { Droid } from './types/droid.type';
import { Character, Episode, CharacterUnion } from './types/character.union';

@Resolver('Hero')
export class HeroResolver {
  private heroes: Character[] = [
    new Human(
      '5f203b7175eb88cdc2f27ef4',
      'Obi-Wan Kenobi',
      [],
      [Episode.NEWHOPE],
      [],
      12,
    ),
    new Droid(
      '5f203b7175eb88cdc2f27ef4',
      'R2-D2',
      [],
      [Episode.NEWHOPE],
      'Repair',
    ),
  ];
  @Query(
    /* istanbul ignore next */
    (): [typeof CharacterUnion] => [CharacterUnion],
  )
  async hero(@Args('episode', { type: () => Episode }) episode: Episode): Promise<Character[]> {
    return this.heroes.filter(hero => hero.appearsIn.indexOf(episode) !== -1);
  }
}
