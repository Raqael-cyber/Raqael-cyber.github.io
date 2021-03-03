import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username = '';
  password = '';
  reversedUsername = this.username.split("").reverse().join("");
  reversedPassword = this.password.split("").reverse().join("");

  constructor() { }

  ngOnInit(): void {}

  submitMe(){
    this.reversedUsername = this.username.split("").reverse().join("");
    this.reversedPassword = this.password.split("").reverse().join("");
  }
}
