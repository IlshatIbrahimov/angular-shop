import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MainPageComponent} from './main_page/main_page.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  isProfilePageVisible = false;

}

