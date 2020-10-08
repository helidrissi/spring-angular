import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from './model/Env';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  
  baseUrl="http://localhost:8000/env";
  constructor(private http:HttpClient) { }

  
  getEnv()
  {

    return this.http.get<Env>(this.baseUrl);
  }
}
