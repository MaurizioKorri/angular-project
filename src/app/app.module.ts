import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddressesListComponent } from './components/addresses/addresses-list/addresses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    AddressesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
