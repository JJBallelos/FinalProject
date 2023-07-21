import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.default.User | null>;
  
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }
  
 
  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['tabs']);
        console.log("You're in!");
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
  
  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .signOut();
  }
}