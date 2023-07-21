import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from '../authentication.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async signIn() {
   
    try {
      const result = await this.authenticationService.SignIn(this.email, this.password);
      this.email = '';
      this.password = '';
      console.log("result");
    } catch (error) {
      this.errorMessage = 'An error occurred while signing in. Please check your email and password.';
      await this.dismissLoading(); // Close the loading screen
      this.presentErrorToast(this.errorMessage);
    }
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

  async presentErrorToast(errorMessage: string) {
    const toast = await this.toastCtrl.create({
      message: errorMessage,
      color: 'danger'
    });

    await toast.present();
  }
}
