import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { CombinedService } from '../combined.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
oneItem : Item;
  constructor(private router: Router,private route: ActivatedRoute, private combinedService: CombinedService,private location: Location) { 
  }

  ngOnInit():void {
  	this.getItem();
  }

getItem() :void {
	const id = +this.route.snapshot.params['id'];
	this.oneItem = this.combinedService.getItem(id);
}

onBuy(id) {
this.combinedService.buyItem(id);
this.router.navigate(['/paymentPage']);
}

onAdd(id) {
	this.combinedService.addItem(id);
	this.router.navigate(['/cartData'])
}

}
