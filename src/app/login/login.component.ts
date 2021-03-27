import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(public authService: AuthService) {
  }

  errorMessage: any = null;

  ngOnInit(): void {
    this.authService.refreshVariables();
    this.authService.isError.subscribe(message => this.errorMessage = message);
    this.errorMessage = null;
  }

}
