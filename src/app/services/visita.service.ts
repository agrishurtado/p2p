import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VisitaI } from '../models/visita.interface';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  private visitasCollection:  AngularFirestoreCollection<VisitaI>;
  private visitas: Observable<VisitaI[]>;
  constructor(db:AngularFirestore) {
    this.visitasCollection = db.collection<VisitaI>('vitacora');
    this.visitas = this.visitasCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      }
    ));
  }

  getVisitas(){
    return this.visitas;
  }

  getVisita(id:string){
    return this.visitasCollection.doc<VisitaI>(id).valueChanges();
  }

  updateVisita(visita:VisitaI, id:string){
    return this.visitasCollection.doc(id).update(visita);
  }

  addVisita(visita: VisitaI){
    return this.visitasCollection.add(visita);
  }
  removeVisita(id:string){
    return this.visitasCollection.doc(id).delete();
  }
}