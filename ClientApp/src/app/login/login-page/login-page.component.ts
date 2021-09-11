import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  LoginFormBuilder: FormGroup;
  Submitted = false;
  Submit_Message: string;

  constructor(private FormBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {

    this.LoginFormBuilder = this.FormBuilder.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.LoginFormBuilder.controls; }

  onSubmit() {

    this.Submitted = true;

    // stop here if form is invalid
    if (this.LoginFormBuilder.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.LoginFormBuilder.value, null, 4));
    this.router.navigate(['/startup'])

  }
}
