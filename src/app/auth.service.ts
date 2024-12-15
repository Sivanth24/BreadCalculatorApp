import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  login(): void {
    sessionStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn');
  }
}
