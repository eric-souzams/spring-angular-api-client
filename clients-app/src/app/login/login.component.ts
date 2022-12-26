import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  isRegister: boolean;
  successMessage: string;
  errors: string[];

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  onSubmit() {
    this.auth
      .login(this.username, this.password)
      .subscribe(
        response => {
          const accessToken: string = JSON.stringify(response);
          localStorage.setItem('access_token', accessToken);

          this.router.navigate(['/home']);
        },
        errorResponse => {
          this.errors = ['Username or password invalid.'];
        }
      );
  }

  handlerPrepareRegister(event) {
    event.preventDefault();
    this.isRegister = true;
  }

  handlerCancelRegister() {
    this.isRegister = false;
    this.errors = null;
    this.successMessage = null;
    this.username = '';
    this.password = '';
  }

  handlerRegister() {
    const user = new User();
    user.username = this.username;
    user.password = this.password;

    this.auth
      .register(user)
      .subscribe(
        response => {
          this.successMessage = 'Register with success. Make Login.';
          this.errors = [];
          this.isRegister = false;
          this.username = '';
          this.password = '';
        },
        errorResponse => {
          this.errors = errorResponse.error.errors;
          this.successMessage = null;
        }
      );

  }

  handlerLogin() {

  }

}
