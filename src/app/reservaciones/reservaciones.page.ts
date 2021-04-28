import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage implements OnInit {
  id: any;
  constructor(private afAuth: AuthService) { }
  ngOnInit() {
    this.afAuth.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }
}