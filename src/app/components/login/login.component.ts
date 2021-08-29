import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginForm:any;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "uName": new FormControl(null,[Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$'),Validators.required]),
      "pWord": new FormControl(null,Validators.required)
    })
  }
  submitData()
  {
    console.log(this.loginForm);
  }

  get username(){return this.loginForm.get('uName');}
}
