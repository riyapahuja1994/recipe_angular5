import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {NgbModule,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';

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
    ShoppingListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BsDropdownModule,
    AppRoutingModule,
    // NgbModule.forRoot(),
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
