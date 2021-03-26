// @ts-nocheck
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  name = '';
  surname = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {
  }

  register() {
    this.http.post('http://localhost:8080/register', {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password
    }).subscribe((response) => {
      localStorage.setItem('JWT', response.jwt);
      localStorage.setItem('NAME', response.user.name);
      localStorage.setItem('SURNAME', response.user.surname);
      localStorage.setItem('ID', response.user.id);
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }

  login() {
    this.http.post('http://localhost:8080/auth', {
      email: this.email,
      password: this.password
    }).subscribe(response => {
      localStorage.setItem('JWT', response.jwt);
      localStorage.setItem('NAME', response.user.name);1
      localStorage.setItem('SURNAME', response.user.surname);
      localStorage.setItem('ID', response.user.id);
      console.log('success login');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }

  refreshVariables() {
    this.name = '';
    this.surname = '';
    this.email = '';
    this.password = '';
  }

  isAuthenticated() {
    return localStorage.getItem('JWT') !== null;
  }

  logout() {
    localStorage.removeItem('JWT');
    localStorage.removeItem('NAME');
    localStorage.removeItem('SURNAME');
  }
}
