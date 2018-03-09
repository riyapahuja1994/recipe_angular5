import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import { RecipesFetchService } from '../../services/recipes-fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Irecipe } from '../../interfaces/irecipe';
import { CanComponentDeactivate } from '../../guards/leave-form.guard';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit,CanComponentDeactivate {

  recipeEditForm: FormGroup;
  recipe : Irecipe;
  ingredient: any = {ingredientName:'',quantity:''};
  constructor(private activatedRoute:ActivatedRoute, private RecipesFetchService: RecipesFetchService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.recipe = this.RecipesFetchService.getRecipeById(+params['id']);
      console.log(this.recipe);
    });
    console.log(this.recipe);
    this.recipeEditForm = new FormGroup({
      id: new FormControl(this.recipe.id),
      name: new FormControl(this.recipe.name),
      imagePath: new FormControl(this.recipe.imagePath),
      description: new FormControl(this.recipe.description),
      ingredients: new FormArray([this.createItem(this.ingredient)])
    })
    this.recipe.ingredients.forEach(value =>{
      // console.log("value",value.IngredientName),
        (<FormArray>this.recipeEditForm.get('ingredients')).push(this.createItem(value));
    })
  }
  createItem(ingredient): FormGroup {
      return new FormGroup({
          ingredientName: new FormControl(ingredient.IngredientName),
          quantity: new FormControl(ingredient.quantity)
      });
  }

  addIngredient(){
    // console.log((<FormArray>this.recipeEditForm.get('ingredients')).controls[0].get('ingredientName'));
    (<FormArray>this.recipeEditForm.get('ingredients')).push(this.createItem(this.ingredient));
    }

  deleteIngredient(index: number){
      (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
    }
  submit(){
    console.log(this.recipeEditForm);
    this.RecipesFetchService.editRecipe(this.recipeEditForm.value);
  }

  confirm(){
    return confirm("Do you want to leave the form?");
  }
}
