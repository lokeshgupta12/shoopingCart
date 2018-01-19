import { Component, OnInit } from '@angular/core';
//import { Items } from '../allItems';
import { Item } from '../item.model';
import { Router,ActivatedRoute } from '@angular/router';
import { CombinedService } from '../combined.service';



@Component({
  selector: 'app-comp1items',
  templateUrl: './comp1items.component.html',
  styleUrls: ['./comp1items.component.css']
})
export class Comp1itemsComponent implements OnInit {

//inCompArray = Items;
inCompArray : Item[];
filteredStatus = '';
  constructor(private combinedService: CombinedService) { }

getItemInComp(): void {
	this.inCompArray =  this.combinedService.getItems(); 
}
  ngOnInit() {
  	this.getItemInComp();
  }

}
