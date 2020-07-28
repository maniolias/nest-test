import { Resolver, Query } from '@nestjs/graphql';
import { Character, Episode } from './types/character.type';
import { Human } from './types/human.type';
import { Droid } from './types/droid.type';

@Resolver('Hero')
export class HeroResolver {
    private heroes: Character[] = [
        new Human(
            '5f203b7175eb88cdc2f27ef4',
            'Obi-Wan Kenobi',
            [],
            [
                Episode.NEWHOPE
            ],
            [],
            12
        ),
        new Droid(
            '5f203b7175eb88cdc2f27ef4',
            'R2-D2',
            [],
            [
                Episode.NEWHOPE
            ],
            'Repair'
        ),
    ]
  @Query(
    /* istanbul ignore next */
    (): typeof Character => Character,
  )
  async hero(episode: Episode): Promise<Character> {
    return this.heroes.find(hero=>hero.appearsIn.indexOf(episode)!==-1)
  }
}
