import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'Just a test', 'https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/' +
      'chicken-and-prosciutto-parmigiana-79468-1.jpeg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
