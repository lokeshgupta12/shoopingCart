import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Router,ActivatedRoute } from '@angular/router';
import { CombinedService } from '../combined.service';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.css']
})
export class CartDataComponent implements OnInit {

dataInCart:Item[] = [];
totalAmt : Number;


  constructor(private router: Router,private combinedService: CombinedService) { }

getSelectedItemInCart() {
this.dataInCart = this.combinedService.getSelectedItem();
}
  
  totalAmountInCart(cartData : Item[]) {
 this.totalAmt =this.combinedService.totalAmount(cartData);  //formal parameter
 console.log(this.totalAmt);
  }

removeItemFromCart(id) {
this.totalAmt=this.combinedService.removedItem(id);

}
cancel() {
	this.router.navigate(['/comp1items']);
}
// checkDataInCart() {
// if(!this.dataInCart.length) {
// 	alert("You dont have any item in cart.....");
// }


// }
continue() {
 this.router.navigate(['/paymentPage']);
}

  ngOnInit() {
  	this.getSelectedItemInCart();
  	this.totalAmountInCart(this.dataInCart); //actual parameter
  }
  

}
