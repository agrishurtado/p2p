import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { message } from '../../models/message.model';
import { ChatService } from 'src/app/services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public name: string;
  public mensajes = [];
   public chat: any;
  public message : message;
  // 
  // public room: any;
   public msg: string;

  constructor(private navparams: NavParams,
              private modal: ModalController,
              private chatService: ChatService) { }

   ngOnInit() {

  //   this.chatService.getChatRoom(this.chat.id).subscribe(room => {
  //     console.log(room);
  //     this.room = room;
  //   })

    this.chat = this.navparams.get('chat')
   }


  closeChat() {
    this.modal.dismiss()
  }

  sendMessage() {
    this.mensajes.push(this.message)
    
  //   const mensaje: Mensaje = {
  //     content: this.msg,
  //     type: 'text',
  //     date: new Date()
  //   }

  //   this.chatService.sendMsgToFirebase(mensaje, this.chat.id);
  //   this.msg = "";
  }
}
