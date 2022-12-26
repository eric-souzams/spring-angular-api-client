import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from './login/user';

import { environment} from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrlBase: string = environment.apiURLBase + "/api/users";
  tokenUrl: string = environment.apiURLBase + environment.oauthTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) {}

  getToken() {
    const tokenString = localStorage.getItem('access_token');
    if (tokenString) {
      const token = JSON.parse(tokenString).access_token;
      return token;
    }

    return null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const isExpired = this.jwtHelper.isTokenExpired(token);
      return !isExpired;
    } 

    return false;
  }

  getAuthenticatedUser() {
    const token = this.getToken();
    if(token) {
      const user = this.jwtHelper.decodeToken(token).user_name;
      return user;
    }

    return null;
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrlBase, user);
  }

  login(username: string, password: string): Observable<any> {
    const params = new HttpParams()
        .set('username', username)
        .set('password', password)
        .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    return this.http.post<any>(
      this.tokenUrl, 
      params.toString(), 
      { headers: headers }
    );
  }
}
