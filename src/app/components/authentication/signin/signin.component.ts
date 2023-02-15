import { AuthService } from './../../../services/AuthService';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


  constructor(private authService: AuthService){}


  onSubmit(form: NgForm){
    console.log(form)
    const name = form.value.firstName;
    const surname = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;
    const cc = form.value.cc;



    this.authService.signIn({firstName: name, lastName: surname, email: email, password: password, cc: cc}).subscribe(
      data => {
        console.log(data);

      }
    );
  }
}
