import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fbAuth: AngularFireAuth,
    private router: Router) { }

  async signInGoogle() {
    const credentials = await this.fbAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log(credentials);
    this.router.navigate(['home']);
  }

  async logout() {
    await this.fbAuth.signOut();
    console.log("Signed-out");
    
  }
}
