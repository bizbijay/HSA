import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent  {
@Input() property_data :any
  // Property: any = {
  //   "Id":1,
  //   "Name": "Bijay's House",
  //   "Type":"House",
  //   "Price":12000
  // }

}
