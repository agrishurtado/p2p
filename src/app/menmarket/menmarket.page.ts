import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menmarket',
  templateUrl: './menmarket.page.html',
  styleUrls: ['./menmarket.page.scss'],
})
export class MenmarketPage implements OnInit {

  id: any;
  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    }); 
    
  }

}
