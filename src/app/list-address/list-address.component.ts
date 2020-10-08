import { AddressService } from './../services/address.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  constructor(private addressservice:AddressService) { }



  ngOnInit(): void {

    this.getAllAddressses();
  }


  getAllAddressses()
  {

   
  }
}
