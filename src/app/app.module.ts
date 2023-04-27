import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';



import { SigninComponent } from './components/authentication/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { FormsModule }   from '@angular/forms';

import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CustomerProductsComponent } from './components/customer-products/customer-products.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    CustomerProfileComponent,
    ShoppingCartComponent,
    CustomerProductsComponent,
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
    MatIconModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
