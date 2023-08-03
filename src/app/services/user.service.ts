import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  private paymentsSubject = new BehaviorSubject<any>([]);
  public payments$ = this.paymentsSubject.asObservable();

  private authCodeSubject = new BehaviorSubject<number>(0);
  public authCode$ = this.authCodeSubject.asObservable();

  private errorsSubject = new BehaviorSubject<any>({
    sendAuthToken: null,
    acceptAuthToken: null,
    signIn: null,
    signUp: null,
    logOut: null,
    fetchCurrentUser: null,
    changeUserInfo: null,
    showUserPayments: null
  });
  public errors$ = this.errorsSubject.asObservable()

  constructor() { }


  updateUser(user: any) {
    this.userSubject.next(user);
  }

  updatePayments(payments: any[]) {
    this.paymentsSubject.next(payments);
  }

  updateAuthCode(authCode: number) {
    this.authCodeSubject.next(authCode);
  }

  updateErrors(errors: any) {
    this.errorsSubject.next(errors);
  }

  async signIn(email: string, password: string) {
    let redirectUrl = localStorage.getItem('redirectUrl') || '';

    const headers = {
      'Content-Type': 'application/json'
    };

    const query = `mutation loginUser {
      tokenAuth(email: "${email}", password: "${password}") {
        token,
        refreshToken,
        payload
      }
    }`;

    try {
      const response = await axios.post('/graphql/', { headers, query });
      this.errors$.signIn = this.errorHandler(response);

      if (this.errors$.signIn == null) {
        const tokenAuth = response.data.tokenAuth;
        localStorage.setItem('email', email);
        this.stateStore.setToken(tokenAuth.token, tokenAuth.payload.exp);
        this.router.navigate([`/${redirectUrl}`]);
      }
    } catch (error) {
      this.errors.signIn = [error.message];
    }

    localStorage.removeItem('redirectUrl');
    this.fetchCurrentUser();
  }

}
