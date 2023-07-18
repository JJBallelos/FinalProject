import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  angularFireAuth: any;

  constructor(
    private authenticationService:AuthenticationService
  ) {}
  SignOut() {
    this.angularFireAuth
      .signOut();
  }
}
