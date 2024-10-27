import { Routes } from '@angular/router';
import {LoginButtonComponent} from './components/login-button';
import {LogoutButtonComponent} from './components/logout-button';
import {HomeComponent} from './pages/home/home.component';


export const routes: Routes = [
  {
  path: 'login',
  component: LoginButtonComponent
  },
  {
    path: 'logout',
    component: LogoutButtonComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  }
];
