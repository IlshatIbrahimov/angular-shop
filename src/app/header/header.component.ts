import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ProfileGuard} from '../guard/profile-guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authService: AuthService, private loginGuard: ProfileGuard) {
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
