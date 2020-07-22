import { AddressService } from './../services/address.service';
import { Component, OnInit } from '@angular/core';
import {Address} from '../model/address'

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  constructor(private addressservice:AddressService) { }

  addresses: Address[]=[];

  ngOnInit(): void {

    this.getAllAddressses();
  }


  getAllAddressses()
  {

    this.addressservice.getall().subscribe((res:Address[])=> this.addresses=res)
  }
}
