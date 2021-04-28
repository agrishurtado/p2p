import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-balancesubtitulos',
  templateUrl: './balancesubtitulos.page.html',
  styleUrls: ['./balancesubtitulos.page.scss'],
})
export class BalancesubtitulosPage implements OnInit {
  id: any;

  constructor(private afAuth: AuthService) { }

  ngOnInit() {
    this.afAuth.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }
}