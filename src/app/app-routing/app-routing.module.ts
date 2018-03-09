import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from '../components/recipe-details/recipe-details.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { EditRecipeComponent } from '../components/edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from '../components/new-recipe/new-recipe.component';
import { LeaveFormGuard } from '../guards/leave-form.guard';


const appRoutes = [
  { path:'recipes', component: RecipesComponent, 
    children:[
      { path:'new', component: NewRecipeComponent , canDeactivate: [LeaveFormGuard]},      
      { path:':id', component: RecipeDetailsComponent },
      { path:':id/edit', component: EditRecipeComponent, canDeactivate: [LeaveFormGuard] },
      { path:'', component: PlaceholderComponent }
    ]  },
  { path:'shopping-list', component: ShoppingListComponent },
  { path:'', redirectTo:'/recipes', pathMatch: 'full'},
	{ path:'**', redirectTo:'/recipes', pathMatch: 'full'}
]
@NgModule({
  providers:[LeaveFormGuard],
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
