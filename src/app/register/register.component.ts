import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(public authService: AuthService) {
  }

  errorMessage: any = null;

  ngOnInit(): void {
    this.authService.refreshVariables();
    this.authService.isError.subscribe(message => this.errorMessage = message);
    this.errorMessage = null;
  }
}
