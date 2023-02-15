import { SigninComponent } from './components/authentication/signin/signin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CustomersPanelComponent } from './components/customers/customers-panel/customers-panel.component';
import { SignupComponent } from './components/authentication/signup/signup.component';

const routes: Routes = [
  { path: '' , component: WelcomeComponent },
  { path: 'customers' , component: CustomersPanelComponent },
  { path: 'customers/:customerId' , component: CustomerDetailsComponent },
  { path: 'products', component: ProductsListComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
