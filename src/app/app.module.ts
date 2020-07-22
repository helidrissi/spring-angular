import { JwtInterceptor } from './services/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    EditAddressComponent,
    ListAddressComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptor,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
