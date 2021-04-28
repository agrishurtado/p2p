import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReservacionI } from '../models/reservaciones.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  private reservacionCollection:  AngularFirestoreCollection<ReservacionI>;
  private reservaciones: Observable<ReservacionI[]>;
  constructor(db:AngularFirestore) {
    this.reservacionCollection = db.collection<ReservacionI>('reservaciones');
    this.reservaciones = this.reservacionCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      }
    ));
  }
  getReservaciones(){
    return this.reservaciones;
  }

  getReservacion(id:string){
    return this.reservacionCollection.doc<ReservacionI>(id).valueChanges();
  }

  updateReservacion(visita:ReservacionI, id:string){
    return this.reservacionCollection.doc(id).update(visita);
  }

  addReservacion(visita: ReservacionI){
    return this.reservacionCollection.add(visita);
  }
  removeReservacion(id:string){
    return this.reservacionCollection.doc(id).delete();
  }
}
