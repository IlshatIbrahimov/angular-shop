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
import {LoginGuard} from './guard/login.guard';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginGuard],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {


}

