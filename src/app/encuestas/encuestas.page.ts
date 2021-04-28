import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})
export class EncuestasPage implements OnInit {

  id: any;
  
    constructor(private authServ: AuthService) {
     }
  
    ngOnInit() {
      this.authServ.getUserAuth().subscribe(user => {
        this.id = user.uid
      });
    }

}
