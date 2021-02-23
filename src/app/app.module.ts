import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MainPageComponent} from './main_page/main_page.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {ProfileGuard} from './guard/profile-guard';
import {LoginGuard} from './guard/login-guard';
import { GroupComponent } from './group/group.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileGuard, LoginGuard],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {


}

