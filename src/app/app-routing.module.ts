import { CustomerProductsComponent } from './components/customer-products/customer-products.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '' , component: WelcomeComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'customerProfile', component: CustomerProfileComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent},
  { path: 'customerProducts', component: CustomerProductsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
