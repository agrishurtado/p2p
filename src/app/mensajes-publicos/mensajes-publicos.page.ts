import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ChatsService } from '../services/chats.service';


@Component({
  selector: 'app-mensajes-publicos',
  templateUrl: './mensajes-publicos.page.html',
  styleUrls: ['./mensajes-publicos.page.scss'],
})
export class MensajesPublicosPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  messages: Observable<any[]>;
  newMsg = '';
  de = 'Administrador';
  id: any;

  constructor(private chatService: ChatsService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    })
  }

  sendMessage(){
    this.chatService.addChatMessage(this.newMsg, this.de).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

}
