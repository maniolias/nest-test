import { Field, ID, InterfaceType, ObjectType } from '@nestjs/graphql';

const METADATA_FACTORY_NAME = '_GRAPHQL_METADATA_FACTORY';

@InterfaceType({
  description: 'example interface',
  resolveType: (value) => {
    if (value.type === 'recipe') return Recipe;
    else return RecipeTest;
  },
})
export abstract class IRecipe {
  type: string;

  @Field((type) => ID)
  id: string;

  @Field()
  title: string;
}

@ObjectType({ implements: IRecipe, description: 'recipe object type' })
export class Recipe {
  type = 'recipe';

  id: string;

  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field()
  get averageRating(): number {
    return 0.5;
  }

  constructor(recipe: Partial<Recipe>) {
    Object.assign(this, recipe);
  }

  static [METADATA_FACTORY_NAME]() {
    return {
      lastRate: { nullable: true, type: () => Number },
      tags: { nullable: false, type: () => [String] },
    };
  }
}

@ObjectType({ implements: IRecipe, description: 'recipe object type' })
export class RecipeTest {
  type = 'recipeTest';

  id: string;

  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field()
  get averageRating(): number {
    return 0.5;
  }

  constructor(recipe: Partial<Recipe>) {
    Object.assign(this, recipe);
  }

  static [METADATA_FACTORY_NAME]() {
    return {
      lastRate: { nullable: true, type: () => Number },
      tags: { nullable: false, type: () => [String] },
    };
  }
}
