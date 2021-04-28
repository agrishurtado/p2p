import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";
import {  message } from '../models/message.model';
import { firestore } from 'firebase';

export interface chat {
  description : string
  name : string
  id: string
  img : string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  

  constructor(private db: AngularFirestore) { }

  getChatRooms(){    
   return this.db.collection('usuariocondomino').snapshotChanges().pipe(map(rooms => {
     return rooms.map(a =>{
       const data = a.payload.doc.data() as chat;
       data.id = a.payload.doc.id;
       return data;
     })
   }))
  }

  getChatRoom( id : string){
    return this.db.collection('usuariocondomino').doc(id).valueChanges()
  }


   sendMsgToFirebase( mensajes : message, id : string){

     this.db.collection('usuariocondomino').doc(id).update({
       mensajes : firestore.FieldValue.arrayUnion(mensajes),
     })
   }

} 
