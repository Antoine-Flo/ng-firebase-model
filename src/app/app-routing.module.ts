import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate } from '@angular/fire/auth-guard';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SecretComponent } from './pages/secret/secret.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path:'login', component:  SigninComponent },
  { path: 'home', component: HomeComponent, ...canActivate(redirectUnauthorizedToLogin)  },
  { path: 'secret', component: SecretComponent, ...canActivate(redirectUnauthorizedToLogin)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }