import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [
    {
      "Id":1,
      "Name": "Bijay's House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":2,
      "Name": "Ram's House",
      "Type":"House",
      "Price":100
    },{
      "Id":3,
      "Name": "Shyam's House",
      "Type":"House",
      "Price":200
    },{
      "Id":4,
      "Name": "Hari's House",
      "Type":"House",
      "Price":300
    },{
      "Id":5,
      "Name": "Gopal's House",
      "Type":"House",
      "Price":400
    },{
      "Id":6,
      "Name": "Krishna's House",
      "Type":"House",
      "Price":411
    },
]
  constructor() { }

  ngOnInit() {
  }
  
}
