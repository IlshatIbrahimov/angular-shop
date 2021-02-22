import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-basics';
}
