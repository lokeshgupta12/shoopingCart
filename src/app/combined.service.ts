import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Items } from './allItems';

@Injectable()
export class CombinedService {
	 localData = JSON.parse(localStorage.getItem("updatedData"))
	 allItem : Item[]
	 selectedItems:Item[] =[];
	total =0;
	oneTotal = 0;
	 itemBuy;
	 arrForCus = [];
	
	


getItems(): Item[] {
	return this.allItem;
}

getItem(id: number): Item {
return this.allItem.find(Items => Items.id === id);
}

buyItem(id:number) {
 this.itemBuy= this.allItem.find(Items =>Items.id === id)
this.oneTotal = this.itemBuy.amount;
 
}

buiedItem() {
	return this.oneTotal;
}

getSelectedItem() {
return this.selectedItems;
}

// getTotalAmount(){
// 	return this.total;
// }

addItem(id:number) {
let itemInCart = this.allItem.find(Items =>Items.id === id)
if(this.selectedItems.indexOf(itemInCart)<0){
	this.selectedItems.push(itemInCart);
}
}

totalAmount(data) {
	this.total =0;
	//this.getSelectedItem();
	let i;
	for(i=0;i<data.length;i++)
	{
       this.total += data[i].amount;
       
	}
	 return this.total;
	
}

removedItem(id:number) {
let i,itemm;
itemm = this.selectedItems.find(selectedItems =>selectedItems.id === id)
if(this.selectedItems.indexOf(itemm) !== -1) {
	this.selectedItems.splice(this.selectedItems.indexOf(itemm), 1)
}
return this.total -= itemm.amount;
// for(i=0;i<this.selectedItems.length;i++) {
// if(id === this.selectedItems[i].id)
// 	this.selectedItems.splice(i)
// }

}

  constructor() { 
  if(this.localData) {
       this.allItem  = this.localData
	}
	 else {
      this.allItem  = Items
	}
}
}




