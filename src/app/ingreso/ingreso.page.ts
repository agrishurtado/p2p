import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  email: string;
  id: string;

  constructor(private authService: AuthService) { }

  ngOnInit() { 
    this.authService.getUserAuth().subscribe(user => {
      this.email = user.email;
      this.id = user.uid;
    });
  }
  }
