import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router,
    private firestore: AngularFirestore
  ) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));

    });
  }

  logout(){
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }




  register(email: string,
    password: string,
    nombre: string,
    tipo: string,
    domicilio: string,
    nfraccionamiento: string,    
    telefono: string,
    sald: string,
    accede: string,
    actdesmsn: string,
    actdesmark: string,
    actdesreser: string,
    actdesbal: string,
    actdesenc: string,
    actdescomu: string,
    actdespay: string,
    actdesacc: string,
    actdesos: string,
    image: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res => {
        console.log(email);
        const uid = res.user.uid;
        this.firestore.collection(tipo).doc(res.user.uid).set({
          nombre: nombre,
          uid: uid,
          tipo: tipo,
          domicilio: domicilio,
          nfraccionamiento: nfraccionamiento,
          telefono: telefono,
          sald: sald,
          accede: accede,
          actdesmsn: actdesmsn,
          actdesmark: actdesmark,
          actdesreser: actdesreser,
          actdesbal: actdesbal, 
          actdesenc: actdesenc, 
          actdescomu: actdescomu, 
          actdespay: actdespay, 
          actdesacc: actdesacc, 
          actdesos: actdesos, 
          image: image,
          
        })
        resolve(res)
      }).catch(err => reject(err))
    })

  }

  getUserAuth(){
    return this.AFauth.authState
  }













  // caseta

  registerV(emailV: string,
    passwordV: string,
    nombreV: string,
    tipoV: string,
    telefonoV: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(emailV, passwordV).then(res => {
        console.log(emailV);
        const uid = res.user.uid;
        this.firestore.collection(tipoV).doc(res.user.uid).set({
          nombreV: nombreV,
          uid: uid,
          tipoV: tipoV,
          telefonoV: telefonoV
          
        })
        resolve(res)
      }).catch(err => reject(err))
    })

  }
}
