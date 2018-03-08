import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';

import { RecipesFetchService } from './services/recipes-fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ShoppingListComponent,
    NavigationComponent,
    PlaceholderComponent,
    RecipeDetailsComponent,
    RecipeComponent,
    NewRecipeComponent,
    ShoppingListItemComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AppBootstrapModule
  ],
  providers: [ RecipesFetchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
