import {Injectable} from '@angular/core';

import {Recipe} from '../../shared/recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list-service/shoppingListService';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Just a Nider - Schnitzel', 'https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/' +
      'chicken-and-prosciutto-parmigiana-79468-1.jpeg', [
      new Ingredient('Meat', 1),
      new Ingredient('French fries', 5)
    ]),
    new Recipe('Second Recipe', 'Just the second recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEF--EIWLj1KVcvkX677uk8lYQ0JCZjZQgjsiSSCqWLMVnV9gBA&s', [
        new Ingredient('Pasta', 200),
        new Ingredient('Parmigiana', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToSl(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
