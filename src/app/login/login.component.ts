import { AccountService } from './../services/account.service';
import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  formLogin=new FormGroup({
    
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    envir:new FormControl(''),
    


  })

  constructor( private authservice:AuthService,
               private tokenservice:TokenService,
               private router:Router,
               private account:AccountService) { }

  ngOnInit(): void {
  }
  login(){

    this.authservice.login(this.formLogin.get('email').value,this.formLogin.get('password').value).subscribe(res => this.authHandle(res))
    
    localStorage.setItem('token', this.formLogin.get('envir').value);
  }

  authHandle(res){

    this.tokenservice.handle(res);
    this.account.changeStatus(true);
    this.router.navigateByUrl("/addresses")
    
  }
}
