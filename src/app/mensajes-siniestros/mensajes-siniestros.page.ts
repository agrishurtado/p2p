import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatsmedService } from 'src/app/services/chatsmed.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mensajes-siniestros',
  templateUrl: './mensajes-siniestros.page.html',
  styleUrls: ['./mensajes-siniestros.page.scss'],
})
export class MensajesSiniestrosPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  messages: Observable<any[]>;
  newMsg = '';
  de = 'Administrador';
  id: any;

  constructor(private chatService: ChatsmedService,private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.messages = this.chatService.getChatSinister();
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }

  sendMessage(){
    this.chatService.addChatSinester(this.newMsg, this.de).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

}