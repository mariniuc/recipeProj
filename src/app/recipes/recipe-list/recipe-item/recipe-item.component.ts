import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Recipe} from '../../../shared/recipe.model';
import {RecipeService} from '../../recipe-services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
    // this.recipeSelected.emit();
  }
}
