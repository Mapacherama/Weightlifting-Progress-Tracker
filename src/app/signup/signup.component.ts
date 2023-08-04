import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  onSignup(email: string, password: string) {
    console.log('Email:', email);
    console.log('Password:', password);
  }
}
