import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipeEditForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.recipeEditForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      imagePath: new FormControl(''),
      description: new FormControl(''),
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
    console.log((<FormArray>this.recipeEditForm.get('ingredients')).controls[0].get('ingredientName'));
    (<FormArray>this.recipeEditForm.get('ingredients')).push(this.createItem());
    }

  submit(){ }

}
