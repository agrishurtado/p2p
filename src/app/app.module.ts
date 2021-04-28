import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from "@angular/fire";
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment} from "src/environments/environment";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { ChatComponent } from './componentes/chat/chat.component';
import { BusquedaPipe } from './busqueda/busqueda.pipe';
import { PipesbalanceModule } from './pipesbalance/pipesbalance.module';
import {PhotoViewer } from '@ionic-native/photo-viewer/ngx';



@NgModule({
  declarations: [AppComponent, ChatComponent],
  entryComponents: [ChatComponent],
  imports: [BrowserModule, 
    PipesbalanceModule,
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFireMessagingModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production }),
    BrowserAnimationsModule],
providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
