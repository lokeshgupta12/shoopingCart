import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { CombinedService } from '../combined.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	 @ViewChild('f') signupForm: NgForm;
  @ViewChild('e') signupform1: NgForm;
  showForm=true;

  constructor(private router: Router,private route: ActivatedRoute, private combinedService: CombinedService,private location: Location) {}

onSubmit() {
  this.router.navigate(['/comp1items']);

}
onClick() {
	this.showForm=false;
	alert(this.signupform1);
}

onLogin(){
	this.router.navigate(['/comp1items']);	
}
  ngOnInit() {
  }

}
