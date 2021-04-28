import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menumensajes',
  templateUrl: './menumensajes.page.html',
  styleUrls: ['./menumensajes.page.scss'],
})
export class MenumensajesPage implements OnInit {

  id: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }

}
