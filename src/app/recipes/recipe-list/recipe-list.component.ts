import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() listSelectedRecipe = new EventEmitter<Recipe>();
  
  public recipes: Recipe[] = [
    new Recipe('Grunt pancake',
      'Top rank pancake for sunday breakfast',
      'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg'
    ),
    new Recipe('Grunt pancake',
      'Top rank pancake for sunday breakfast',
      'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg'
    ),
    new Recipe('Grunt pancake',
      'Top rank pancake for sunday breakfast',
      'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg'
    ),
    new Recipe('Grunt pancake',
      'Top rank pancake for sunday breakfast',
      'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    console.log("recipe-list: ", recipe)
    this.listSelectedRecipe.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
