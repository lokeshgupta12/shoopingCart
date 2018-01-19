import { Component, OnInit , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { CombinedService } from '../combined.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

@ViewChild('f') signupForm: NgForm;

  constructor(private router: Router,private route: ActivatedRoute, private combinedService: CombinedService,private location: Location) { }


onSubmit(data) {
let inputObj = data;
if(inputObj.username == "palak"  && inputObj.password == "123456") {
this.router.navigate(['/admin'])

}

console.log(inputObj);
}


  ngOnInit() {
  }

}
