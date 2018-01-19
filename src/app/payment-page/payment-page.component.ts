import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { CombinedService } from '../combined.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
	@ViewChild('f') signupForm: NgForm;
	amountPaid : Number;
    amountPaidForCart : Number;
    purArray : Item[];
    purItem : Item;
    obj = {};

  constructor(private router: Router,private route: ActivatedRoute, private combinedService: CombinedService,private location: Location) { }

  purchasedItem() {
this.amountPaid = this.combinedService.oneTotal;
  }

purchasedItems() {
this.amountPaidForCart = this.combinedService.total;
}

purchasedArray() {
	this.purArray = this.combinedService.getSelectedItem();

}

purchaseItem() {
this.purItem = this.combinedService.itemBuy;
}

onSubmit(data) {
this.obj = data;
this.combinedService.arrForCus.push(data);
}

  ngOnInit() {
this.purchasedItem();
this.purchasedItems();
this.purchasedArray();
this.purchaseItem();
  }

}
