import { CustomersPanelComponent } from './components/customers/customers-panel/customers-panel.component';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import {HttpClientModule} from '@angular/common/http';


import { ProductsListComponent } from './components/products-list/products-list.component';
import { CustomersCountComponent } from './components/customers/customers-count/customers-count.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { FormsModule }   from '@angular/forms';

import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    ProductsListComponent,
    CustomersPanelComponent,
    CustomersCountComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatSliderModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
