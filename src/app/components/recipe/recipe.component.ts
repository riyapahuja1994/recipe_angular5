import { Component, OnInit, Input } from '@angular/core';
import { Irecipe } from '../../interfaces/irecipe'; 

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe :Irecipe;
  constructor() { }

  ngOnInit() {
  }

}
