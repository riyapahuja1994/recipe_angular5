import { Injectable } from '@angular/core';
import { Irecipe } from '../interfaces/irecipe';

@Injectable()
export class RecipesFetchService {

  private _recipeList: Irecipe[] = [
    {
      id:1,
      name:"Pasta",
      description:"Also commonly used to refer to the variety of pasta dishes, pasta is typically made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking.",
      imagePath:"https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg",
      ingredients:[{IngredientName:"ABC",quantity:2},{IngredientName:"MFG",quantity:7}]
    },
    {
      id:2,
      name:"Paneer Tikka",
      description:"Delicious Paneer Tikka with green chutney.",
      imagePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFZAJkvFWrIMdmqc0ePl7FnFaITLokH6iKfSdQKr_ZUpFk5S3tQ",
      ingredients:[]
    },
    {
      id:3,
      name:"Khandavi",
      description:"Special Gujarati Cuisine made from gram flour.",
      imagePath:"http://www.culturalindia.net/iliimages/Gujarati-Food-7.jpg",
      ingredients:[

      ]
    },
    {
      id:4,
      name:"Mughlai Biryani",
      description:"A regal dish, Mughlai biryani is fit for a king and was probably eaten by many too. This recipe combines ingredients typical in the Mughlai style of cooking -- it's a perfect one-dish meal for when you have company.",
      imagePath:"https://fthmb.tqn.com/BnhRd--KfTMy5_ioMi02O7fKXB0=/1280x860/filters:fill(auto,1)/5276421343_3dfb4a9b37_o-56a510525f9b58b7d0dabe3e.jpg",
      ingredients:[]
    },
    {
      id:5,
      name:"Lehsuni Daal (garlic flavored lentils)",
      description:"Made with masoor daal (orange lentils) this dish is simple and very tasty. It is in fact almost a staple in most homes. It makes a great accompaniment for plain boiled rice and a vegetable or meat dish.",
      imagePath:"https://fthmb.tqn.com/FcxkhLosreUP0PNXi4iSHtve9Sc=/960x0/filters:no_upscale()/lehsunidaal1-56a50fdf3df78cf772862822.jpg",
      ingredients:[]
    },
  ]
  constructor() { }

  getRecipeList(): Irecipe[]{
     return this._recipeList;
  }

  getRecipeById(id: number): Irecipe{
    return this._recipeList.filter(recipe => recipe.id === id)[0];
  }

  addNewRecipe(recipe: Irecipe){
    this._recipeList.push(recipe)
  }
}
