import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { AuthGuard } from './auth.guard';
 const firebaseConfig = {
  projectId: 'safety-scan-capstone',
  appId: '1:427404891091:web:887d0e65a4919676f31526',
  storageBucket: 'safety-scan-capstone.appspot.com',
  apiKey: 'AIzaSyBJbpqTfS7SNofWeK9R8kt4BdKQuq5iJtU',
  authDomain: 'safety-scan-capstone.firebaseapp.com',
  messagingSenderId: '427404891091',
  measurementId: 'G-17RD4RJ7BB',
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideRemoteConfig(() => getRemoteConfig()), 
    provideStorage(() => getStorage())
  ],
    
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuard,
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
