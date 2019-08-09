import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
   
  @Input('user') user: User;
  isCollapsed :boolean = true;
  // if ngonInit code is written in the constructor it will give wrong output
  //this is because without the values being intialised the it takes input an empty string
  constructor() {
    
    
   }
   toggleCollapse()
   {
     this.isCollapsed=!this.isCollapsed;
   }

  ngOnInit() {
  
    
  }

}
