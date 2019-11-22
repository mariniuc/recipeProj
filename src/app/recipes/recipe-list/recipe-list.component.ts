import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'Just a test', 'https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/' +
      'chicken-and-prosciutto-parmigiana-79468-1.jpeg'),
    new Recipe('Second Recipe', 'Just the second recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEF--EIWLj1KVcvkX677uk8lYQ0JCZjZQgjsiSSCqWLMVnV9gBA&s')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
