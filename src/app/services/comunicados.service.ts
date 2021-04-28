import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComunicadoI } from '../models/comunicados.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {
  private comunicadoCollection:  AngularFirestoreCollection<ComunicadoI>;
  private comunicados: Observable<ComunicadoI[]>;
  constructor(db:AngularFirestore) {
    this.comunicadoCollection = db.collection<ComunicadoI>('comunicados');
    this.comunicados = this.comunicadoCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      }
    ));
    
  }
  getComunicados(){
    return this.comunicados;
    
  }

  getComunicado(id:string){
    return this.comunicadoCollection.doc<ComunicadoI>(id).valueChanges();
  }

  updateComunicado(visita:ComunicadoI, id:string){
    return this.comunicadoCollection.doc(id).update(visita);
  }

  addComunicado(visita: ComunicadoI){
    return this.comunicadoCollection.add(visita);
  }
  removeComunicado(id:string){
    return this.comunicadoCollection.doc(id).delete();
  }
  
}
