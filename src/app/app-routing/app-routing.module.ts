import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from '../components/recipe-details/recipe-details.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { EditRecipeComponent } from '../components/edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from '../components/new-recipe/new-recipe.component';


const appRoutes = [
  { path:'recipes', component: RecipesComponent, 
    children:[
      { path:'new', component: NewRecipeComponent },      
      { path:':id', component: RecipeDetailsComponent },
      { path:':id/edit', component: EditRecipeComponent },
      { path:'', component: PlaceholderComponent }
    ]  },
  { path:'shopping-list', component: ShoppingListComponent },
  { path:'', redirectTo:'/recipes', pathMatch: 'full'},
	{ path:'**', redirectTo:'/recipes', pathMatch: 'full'}
]
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
