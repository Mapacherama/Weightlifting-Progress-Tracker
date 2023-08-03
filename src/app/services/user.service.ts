import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}
