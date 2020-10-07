
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {



  constructor(private http:HttpClient) { }

  getall(){

    return this.http.get("http://localhost:9000/addresses")
  }
}
