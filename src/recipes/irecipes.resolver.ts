import { IRecipe } from './models/recipe';
import { Args, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver((of) => IRecipe)
export class IRecipesResolver {
  @ResolveField('interfaceResolver', () => Boolean)
  interfaceResolver(
    @Args('arg', { type: () => Number, nullable: true }) arg: number,
  ) {
    return true;
  }
}
