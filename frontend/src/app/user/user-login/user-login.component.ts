import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
  }
}
