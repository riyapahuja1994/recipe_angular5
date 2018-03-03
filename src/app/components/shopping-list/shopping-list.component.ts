import { Component, OnInit } from '@angular/core';
import { IshoppingListItem } from '../../interfaces/ishopping-list-item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList:IshoppingListItem[];
  name:string;
  amount:number;
  count:number
  constructor() {
    this.name = "";
    this.amount = null;
    this.shoppingList=[];
    this.count=0;
   }

  ngOnInit() {
  }

  addItem(userForm){
    this.count+=1;
    this.shoppingList.push({
      id: this.count,
      name: this.name,
      amount : this.amount 
    })
    console.log(this.shoppingList);
    userForm.reset();
  }

  deleteItem(){
    this.shoppingList.pop();
    console.log(this.shoppingList);
  }

}
