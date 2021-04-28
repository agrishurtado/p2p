import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  token = null;

  constructor( private afMessaging: AngularFireMessaging ) { }

  requestPersmission(){
    return this.afMessaging.requestToken.pipe(
      tap(token => {
        console.log('Store the token: ', token);
      })
    );
  }
  sendMessages(){
    
  }

  getMessages(){
    return this.afMessaging.messages;
  }

  deleteToken(){
    if( this.token ){
      this.afMessaging.deleteToken(this.token);
      this.token = null;
    }
  }

}
