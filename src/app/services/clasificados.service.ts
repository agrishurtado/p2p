import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClasificadoI } from '../models/clasificados.interface';

@Injectable({
  providedIn: 'root'
})
export class ClasificadosService {
  private clasificadoCollection:  AngularFirestoreCollection<ClasificadoI>;
  private clasificados: Observable<ClasificadoI[]>;
  constructor(db:AngularFirestore) {
    this.clasificadoCollection = db.collection<ClasificadoI>('clasificados', ref => ref.orderBy('fecha'));
    this.clasificados = this.clasificadoCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      }
    ));
  }
  getClasificados(){
    return this.clasificados;
  }

  getClasificado(id:string){
    return this.clasificadoCollection.doc<ClasificadoI>(id).valueChanges();
  }

  updateClasificado(clasificado:ClasificadoI, id:string){
    return this.clasificadoCollection.doc(id).update(clasificado);
  }

  addClasificado(clasificado: ClasificadoI){
    return this.clasificadoCollection.add(clasificado);
  }
  removeClasificado(id:string){
    return this.clasificadoCollection.doc(id).delete();
  }


  
}
