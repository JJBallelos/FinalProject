import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authenticationService:AuthenticationService,
    private loadingCtrl: LoadingController


  ) {}

  
  async signIn() {
    this.presentLoading();
    const result = await this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    console.log("result")
    }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000 // Display for 5 seconds
    });

    await loading.present();
  }

  async dismissLoading() {
    await this.loadingCtrl.dismiss();
  }
} 