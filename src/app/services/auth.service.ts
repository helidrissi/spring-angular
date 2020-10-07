import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  

  constructor(private http :HttpClient) { 
    

  }

  login(data:{username:string,password:string})
  {
   
    return this.http.post("http://localhost:9000/users/login",data)

  }
}
