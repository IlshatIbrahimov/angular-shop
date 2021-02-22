import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {LoginGuard} from '../guard/login.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authService: AuthService, private loginGuard: LoginGuard) {
  }

  name = '';
  isProfilePageVisible = false;

  onProfileClick() {
    if (!this.isProfilePageVisible && !this.loginGuard.canActivate()) {
      return;
    }
    this.name = localStorage.getItem('NAME') || '';
    this.isProfilePageVisible = !this.isProfilePageVisible;
  }

  logout() {
    this.authService.logout();
    this.isProfilePageVisible = false;
  }
}
