import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { CombinedService } from '../combined.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
imagePath="";
_obj={};
@ViewChild('f') signupForm: NgForm;

  constructor(private router: Router,private route: ActivatedRoute, private combinedService: CombinedService,private location: Location) { }


fileChange(e) {
	console.log(e)
}

onSubmit(data) {
data.id=this.combinedService.allItem.length+1;
data.imagePath=this.imagePath;
this._obj=data;
this.combinedService.allItem.push(data);
localStorage.setItem("updatedData", JSON.stringify(this.combinedService.allItem))
}


  ngOnInit() {
  	
  }

  onFileChange(event){
  	console.log(event)
if(event && event.target && event.target.files.length>0){
let file = event.target.files[0];
this.imagePath=file && file.name ? "assets/"+file.name : '';
}

}

}
