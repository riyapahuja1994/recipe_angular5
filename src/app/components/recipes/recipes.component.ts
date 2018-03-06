import { Component, OnInit } from '@angular/core';
import { Irecipe } from '../../interfaces/irecipe'; 
import { RecipesFetchService } from '../../services/recipes-fetch.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeList: Irecipe[];
  constructor( private RecipeFetchService : RecipesFetchService) { }

  ngOnInit() {
    this.recipeList = this.RecipeFetchService.getRecipeList();
     }
}
