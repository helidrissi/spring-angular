import { AuthGuard } from './guards/auth.guard';
import { AddAddressComponent } from './add-address/add-address.component';
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfterAuthGuard} from './guards/after-auth.guard'




const routes: Routes = [
  { path: "", redirectTo: "/addresses", pathMatch: "full",canActivate :[AuthGuard]},
  {path:"addresses",children:[
    {path:"",component:ListAddressComponent},
    {path:"add",component:AddAddressComponent},
    {path:"edit/:id",component:EditAddressComponent}
  ],canActivate :[AuthGuard]},
  {path:"login",component:LoginComponent,canActivate:[AfterAuthGuard]},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
