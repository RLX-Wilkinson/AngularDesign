import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService) { }
  loginForm:any;
  ngOnInit(): void {
    console.log('ngOninit ran');
    this.loginForm = new FormGroup({
      "uName": new FormControl(null,[Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$'),Validators.required]),
      "pWord": new FormControl(null,Validators.required),

      
      
    })
  }
  submitData()
  {
    console.log(this.loginForm);
  }

  get username(){return this.loginForm.get('uName');}
}
