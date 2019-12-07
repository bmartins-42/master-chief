import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
