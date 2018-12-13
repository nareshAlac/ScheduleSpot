import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginModel} from '../models/LoginModel';
import {LoginService} from './login.service';
import {LoggerService} from '../common/LoggerService/logger.service';
import {Router} from '@angular/router';
import {RootService} from '../common/RootService/root.service';
import {BaseModel} from '../models/BaseModel';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username = new FormControl('');
  password = new FormControl('');

  constructor(private loginService: LoginService,
              private log: LoggerService,
              private router: Router,
              private rootService: RootService,
              private spinner: NgxSpinnerService ) {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
  }

  loginUser() {
    this.log.debug('Login button clicked');
    this.log.debug('Username : ' + this.username.value);
    this.log.debug('Password : ' + this.password.value);
    const msg = new LoginModel();
    msg.userName = this.username.value;
    msg.password = this.password.value;
    this.spinner.show();
    this.loginService.loginUser(msg)
      .then((resp) => {
        this.log.debug('Success Response from Login Request');
        this.log.debug(resp);
        const data = <LoginModel>resp;
        this.log.debug(data.isValidUser);
        this.log.debug(data);
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 2000);
        if (data.isValidUser) {
          this.rootService.loginSuccessfull = true;
          this.rootService.userId = data.userId;
          this.log.debug('Redirecting to Dashboard');
          this.router.navigate(['/dashboard']);
        }
      })
      .catch((err) => {
        this.log.debug('Error Response from Login Request');
        this.log.debug(err);
      });
  }
}
