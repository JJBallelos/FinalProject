import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore methods from the Firebase SDK
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  currentScreen = 1;
  fname: string = '';
  lname: string = '';
  username: string = '';
  country: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = ''; // Variable to hold error messages

  previousScreen() {
    if (this.currentScreen > 1) {
      this.currentScreen--;
    }
  }

  nextScreen() {
    if (this.currentScreen < 3) {
      this.currentScreen++;
    }
  }

  isFormValid(): boolean {
    if (this.currentScreen === 1) {
      return this.fname.trim() !== '' && this.lname.trim() !== '' && this.username.trim() !== '';
    } else if (this.currentScreen === 2) {
      return this.country.trim() !== '';
    } else if (this.currentScreen === 3) {
      return this.email.trim() !== '' && this.password.trim() !== '';
    }
    return false;
  }

  constructor(private afAuth: AngularFireAuth,private router: Router) {}

  async submitForm() {
    // Check if the email is already in use
    try {
      const methods = await this.afAuth.fetchSignInMethodsForEmail(this.email);
      if (methods && methods.length > 0) {
        // Email is already in use, display an error message
        this.errorMessage = 'Email is already in use by another account.';
        console.error('Error: Email is already in use');
        return;
      }

      // The email is not in use, proceed with user registration
      const firestore = getFirestore();
      console.log('Firestore instance:', firestore);

      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.email,
        this.password
      );
      console.log('User registered:', userCredential);

      const userId = userCredential.user?.uid;
      console.log('User ID:', userId);

      await addDoc(collection(firestore, 'users'), {
        userId: userId,
        firstName: this.fname,
        lastName: this.lname,
        username: this.username,
        password: this.password,
        country: this.country,
        email: this.email,
      });

      console.log('User data saved successfully');
      this.resetForm();

      this.router.navigate(['/login'])

      // Navigate to the desired page or show a success message to the user
    } catch (error) {
      // Error handling
      if (error === 'auth/email-already-in-use') {
        this.errorMessage = 'Email is already in use by another account.';
        console.error('Error: Email is already in use');
      } else {
        this.errorMessage = 'An error occurred while processing your request. Please try again later.';
        console.error('Error saving user data:', error);
      }
    }
  }

  // Add a method to reset the form and clear error messages
  resetForm() {
    this.fname = '';
    this.lname = '';
    this.username = '';
    this.country = '';
    this.password = '';
    this.email = '';
    this.currentScreen = 1;
    this.errorMessage = '';
  }
}