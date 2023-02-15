
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  @ViewChild('suform') suform: NgForm;


  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm){
    console.log(form)
    const name = form.value.firstName;
    const surname = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;
    const cc = form.value.cc;



    this.authService.signUp({firstName: name, lastName: surname, email: email, password: password, cc: cc}).subscribe(
      data => {
        console.log(data);

      }
    );
  }

  

}
