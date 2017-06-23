import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test',
    'http://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/cheeseomelette_80621_16x9.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
