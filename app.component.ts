import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  inputText:string="Initial Value";
 constructor()
 {
   this.user = new User();
   this.user.name="Keerthi";
   this.user.title="software Engineer";
   this.user.address="gandhinagar,vanasthalipuram";
   this.user.Phone = [ '8074579249',
     '7032794006'

   ];
 }
}
