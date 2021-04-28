import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tipos-visitas',
  templateUrl: './tipos-visitas.page.html',
  styleUrls: ['./tipos-visitas.page.scss'],
})
export class TiposVisitasPage implements OnInit {
  id: any;
  constructor(private afAuth: AuthService) { 
    
  }

  ngOnInit() {
    this.afAuth.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }
}
