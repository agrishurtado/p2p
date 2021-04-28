import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-balancemenu',
  templateUrl: './balancemenu.page.html',
  styleUrls: ['./balancemenu.page.scss'],
})
export class BalancemenuPage implements OnInit {

  id: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }

}
