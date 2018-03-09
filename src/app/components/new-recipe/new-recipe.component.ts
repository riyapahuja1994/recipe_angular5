import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipesFetchService } from '../../services/recipes-fetch.service';
import { Irecipe } from '../../interfaces/irecipe';
import { CanComponentDeactivate } from '../../guards/leave-form.guard';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit,CanComponentDeactivate { 

  newRecipeForm: FormGroup;
  recipes: Irecipe[];
  recipe: Irecipe;
  Id: number;
  constructor(private RecipesFetchService : RecipesFetchService) { }

  ngOnInit() {
    this.recipes = this.RecipesFetchService.getRecipeList();
    this.recipe = this.recipes[(this.recipes.length)-1];
    this.Id = (this.recipe.id) + 1;
    console.log("Id",this.Id);
    this.newRecipeForm = new FormGroup({
      id: new FormControl(this.Id),
      name: new FormControl('',Validators.required),
      imagePath: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      ingredients: new FormArray([  
        this.createItem()
        ])
    })
  }
  createItem(): FormGroup {
    return new FormGroup({
        ingredientName: new FormControl(''),
        quantity: new FormControl('')
    });
  }

  addIngredient(){
    console.log((<FormArray>this.newRecipeForm.get('ingredients')).controls[0].get('ingredientName'));
    (<FormArray>this.newRecipeForm.get('ingredients')).push(this.createItem());
    }

  submit(){ 
    console.log("Form Value",this.newRecipeForm.value);
    this.RecipesFetchService.addNewRecipe(this.newRecipeForm.value);
    alert("Recipe Successfully Added.");
    this.newRecipeForm.reset();
  }

  confirm(){
    return confirm("Do you want to leave the form?");
  }

}
