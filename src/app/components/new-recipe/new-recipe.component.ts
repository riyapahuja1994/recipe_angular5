import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  newRecipeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.newRecipeForm = new FormGroup({
      id: new FormControl(''),
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

  submit(){ }

}
