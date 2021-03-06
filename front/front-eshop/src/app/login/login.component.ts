import { Component } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Credentials } from './credentials';
import { AuthResponse } from './authResponse';
import { Customer } from './customer';
import { LoginService } from './login.service';
import { CustomerService } from './customer.service';
import { AuthStatus } from './authStatus';
import { Router } from '@angular/router';
import { SharedService } from '../notifications/shared.service';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
  providers: [LoginService, CustomerService]
})
export class LoginComponent {
  private submitted : boolean;
  private credentials : Credentials;
  private authResponse : AuthResponse;
  private authStatus : AuthStatus;
  private customer : Customer;

  constructor(private http: Http, private router: Router, private sharedService: SharedService, private loginService : LoginService, private customerService : CustomerService) {
    this.submitted = false;
    this.credentials = new Credentials("mail2@mail.fr", "passijjfeij");
    this.authResponse = new AuthResponse();
    this.authStatus = new AuthStatus();
    this.customer = new Customer();
  }

  auth() {

    this.loginService.authenticate(this.credentials,
      error => {
        this.sharedService.displayNotification('Connexion impossible', false);
      }
    ).subscribe(

      response => {
        this.authResponse.code = response.json().code;
        this.authResponse.content = response.json().token;


        if (this.authResponse != null) {

          localStorage.setItem("token", this.authResponse.content);

          let token = localStorage.getItem("token");
          this.customerService.retrieveCustomer(token).subscribe(

            response => {
              this.customer.id = response.json().id;
              this.customer.firstname = response.json().firstname;
              this.customer.lastname = response.json().lastname;
              this.customer.email = response.json().email;
              this.customer.credentials = response.json().credentials;
              this.customer.address = response.json().address;
              this.customer.phoneNumber = response.json().phoneNumber;
              localStorage.setItem("customer", JSON.stringify(this.customer));
              this.router.navigate(['']);
              this.sharedService.displayNotification('Vous êtes connecté', true);
            }
          );

        }
      }
      );


  }
  get json() { return JSON.stringify(this.credentials); }
  get authResponseJSON() { return JSON.stringify(this.authResponse); }

}
