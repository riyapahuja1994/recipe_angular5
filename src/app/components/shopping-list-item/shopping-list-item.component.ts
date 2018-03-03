import { Component, OnInit, Input } from '@angular/core';
import { IshoppingListItem } from '../../interfaces/ishopping-list-item';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() shoppingListItem: IshoppingListItem;

  constructor() { }

  ngOnInit() {
  }

}
