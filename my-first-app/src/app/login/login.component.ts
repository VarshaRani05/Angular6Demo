import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  [x: string]: any;
  formHeading = "Fill all details";
  loginForm: FormGroup;
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
 
  
  constructor(private fb:FormBuilder, private router: Router) { }

  public onFormSubmit() {
    if(this.loginForm.valid) {
        this.user = this.loginForm.value;
        console.log(this.user);
        this.router.navigate(['/question-page'])

    }
}
  ngOnInit() {
  //If I am using FormBuilder the we write below code //
  this.loginForm  = this.fb.group({
    email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['',[Validators.required, Validators.pattern('[A-Za-z]{3,20}'), Validators.minLength]] 
})

 }
}
