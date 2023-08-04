import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import { ErrorService } from '../helpers/error.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  public errors: any = {};
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

  constructor(private errorService: ErrorService, private router: Router) { }
  ngOnInit() {
    this.errors$.subscribe((errors) => {
      this.errors = errors;
    });
  }

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
      this.errors.signIn = this.errorService.errorHandler(response);

      if (this.errors.signIn == null) {
        const tokenAuth = response.data.tokenAuth;
        localStorage.setItem('email', email);
        this.router.navigate([`/${redirectUrl}`]);
      }
    } catch (error: any) {
      this.errors.signIn = [error.message];
    }

    localStorage.removeItem('redirectUrl');
  }

}
