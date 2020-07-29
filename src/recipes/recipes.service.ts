import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe, RecipeTest } from './models/recipe';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {
      id: 3,
      ...data,
    } as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return [
      new Recipe({
        id: '1',
        title: 'Pizza',
        creationDate: new Date(),
      }),
      new Recipe({
        id: '2',
        title: 'Spaghetti',
        creationDate: new Date(),
      }),
      new RecipeTest({
        id: '3',
        title: 'Tartiflette',
        creationDate: new Date(),
      }),
    ].find((recipe) => recipe.id === id);
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [
      new Recipe({
        id: '1',
        title: 'Pizza',
        creationDate: new Date(),
      }),
      new Recipe({
        id: '2',
        title: 'Spaghetti',
        creationDate: new Date(),
      }),
      new RecipeTest({
        id: '3',
        title: 'Tartiflette',
        creationDate: new Date(),
      }),
    ] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
