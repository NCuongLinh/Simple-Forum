import { Routes } from '@angular/router';
import {LoginButtonComponent} from './components/login-button';
import {LogoutButtonComponent} from './components/logout-button';

export const routes: Routes = [
  {
  path: 'login',
  component: LoginButtonComponent
  },
  {
    path: 'logout',
    component: LogoutButtonComponent
  }
];
