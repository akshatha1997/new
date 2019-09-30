import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  a: any;
    constructor(public router: Router, private fb: FormBuilder, private http: HttpClient) {
      this.signup = this.fb.group({
        email: new FormControl(),
        password: new FormControl()
      });
     }

  ngOnInit() {
  }
  open(values) {
    console.log('1', values);
    const body = {
      email: values.email,
     password: values.password
    };
    this.http.post('https://reqres.in/api/register', body).subscribe(data => {
    console.log('2', data);
        this.router.navigateByUrl('login');
      });

  }
}
