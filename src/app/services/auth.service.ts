import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;  // This should be controlled by your login/logout method

  constructor() { }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  // You will also want to implement login/logout methods that control the _isLoggedIn variable.
}
