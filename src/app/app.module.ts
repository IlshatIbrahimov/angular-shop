import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {ProfileGuard} from './guard/profile-guard';
import {LoginGuard} from './guard/login-guard';
import {GroupComponent} from './group/group.component';
import {ItemComponent} from './item/item.component';
import {CartComponent} from './cart/cart.component';

const appRoutes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    GroupComponent,
    ItemComponent,
    CartComponent
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

