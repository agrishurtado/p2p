import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

export interface User {
  uid: string;
  email: string;
}

export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatsmedService {
  currentUser: User = null;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.afAuth.onAuthStateChanged(user => {
      console.log('changed:', user);
      this.currentUser = user;
    });
  }

  async signUp({email, password}){
    const credentials = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    console.log('result:', credentials);
    const uid = credentials.user.uid;

    return this.afs.doc(
      'users/${uid}'
    ).set({
      uid,
      email: credentials.user.email,
    });
  }

  signIn({ email, password }){
    return this.afAuth.signInWithEmailAndPassword(email, password);

  }

  signOut(){
    return this.afAuth.signOut();
  }

  addChatMessage(msg, de){
    
    return this.afs.collection('chatmedico').add({
      msg,
      from: this.currentUser.email,
      de,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  addChatPolice(msg, de){
    
    return this.afs.collection('chatpolice').add({
      msg,
      from: this.currentUser.email,
      de,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  getChatPolice(){
    let users = [];

    return this.getUsers().pipe(
      switchMap(rest => {
        users = rest;
        return this.afs.collection('chatpolice', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id'}) as Observable<Message[]>
      }),
      map(messages => {
        for (let m of messages){
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.email === m.from;
        }
        console.log('todos los mensajes: ', messages);
        return messages;
      })
    )
  }

  getChatMessages(){
    let users = [];

    return this.getUsers().pipe(
      switchMap(rest => {
        users = rest;
        console.log('todos los Usuarios: ', users);
        return this.afs.collection('chatmedico', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id'}) as Observable<Message[]>
      }),
      map(messages => {
        for (let m of messages){
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.email === m.from;
        }
        console.log('todos los mensajes: ', messages);
        return messages;
      })
    )
  }


  addChatSinester(msg, de){
    
    return this.afs.collection('chatSinester').add({
      msg,
      from: this.currentUser.email,
      de,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  getChatSinister(){
    let users = [];

    return this.getUsers().pipe(
      switchMap(rest => {
        users = rest;
        return this.afs.collection('chatSinester', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id'}) as Observable<Message[]>
      }),
      map(messages => {
        for (let m of messages){
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.email === m.from;
        }
        console.log('todos los mensajes: ', messages);
        return messages;
      })
    )
  }

  getUsers(){
    return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }

  getUserForMsg(msgFromId, users: User[]): string{
    for (let usr of users){
      if (usr.uid == msgFromId){
        return usr.email;
      }
    }
  }

}
