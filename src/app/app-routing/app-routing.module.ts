import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from '../components/recipe-details/recipe-details.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';


const appRoutes = [
  { path:'recipes', component: RecipesComponent, 
    children:[
      { path:':id', component: RecipeDetailsComponent },
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
