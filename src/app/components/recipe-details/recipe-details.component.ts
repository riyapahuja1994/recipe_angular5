import { Component, OnInit, Input } from '@angular/core';
import { Irecipe } from '../../interfaces/irecipe'; 
import { RecipesFetchService } from '../../services/recipes-fetch.service';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe : Irecipe;
  constructor(private activatedRoute:ActivatedRoute, private RecipesFetchService : RecipesFetchService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.recipe = this.RecipesFetchService.getRecipeById(+params['id']);
    });
  }

}
