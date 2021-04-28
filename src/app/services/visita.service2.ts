import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VisitaI } from '../models/visita.interface';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VisitaService2 {
    private visitasCollection:  AngularFirestoreCollection<VisitaI>;
    private visitas: Observable<VisitaI[]>;
    constructor(private firestore: AngularFirestore,
                db:AngularFirestore) {
      this.visitasCollection = db.collection<VisitaI>('visitas');
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

    // addVisitaP(visita: VisitaI){}

    async   addVisitaP(visita: VisitaI){
      
      
      try {
      await this.firestore.collection("visitaproveedoradmin").add(visita);
      } catch (e) {
      // this.showToast(e);
      }
      //cerrar loading
      // (await loader).dismiss();
      
      //redirigir a home
      
      // this.navCtrl.navigateRoot("/reservar");
      
      
      
      }
    


  }


  //////////////////////////////////////////////////////
