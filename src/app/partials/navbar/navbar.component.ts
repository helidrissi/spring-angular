import { TokenService } from './../../services/token.service';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   public currentuser:null;
  constructor(private account:AccountService,private token:TokenService,private router:Router) { }

  ngOnInit(): void {

    this.account.authStatus.subscribe(res=>{
      
      this.currentuser=this.token.getInfos();}
      
      )
      
  }

  logout(){

    this.token.remove();
    this.account.changeStatus(false);
    this.router.navigateByUrl("/login");
  }

}
