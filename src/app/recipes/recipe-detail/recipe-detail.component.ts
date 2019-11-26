import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {RecipeService} from '../recipe-services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  addToSl() {
    this.recipeService.addIngredientsToSl(this.recipe.ingredients);
  }
}
