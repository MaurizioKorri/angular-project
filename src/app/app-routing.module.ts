import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

const routes: Routes = [
  { path: '' , component: WelcomeComponent },
  { path: 'customers' , component: CustomersListComponent },
  { path: 'customers/:customerId' , component: CustomerDetailsComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
