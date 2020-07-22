import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private LoggedIn = new BehaviorSubject<boolean>(this.tokenservice.loggedIn());

  authStatus=this.LoggedIn.asObservable();

  constructor(private tokenservice:TokenService) { }

  changeStatus(value:boolean){

    this.LoggedIn.next(value);
  }
}
