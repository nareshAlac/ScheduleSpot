import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../models/LoginModel';
import {environment} from '../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  loginUser(msg: any) {
  const url = environment.baseUrl + '/rest/user/login';
    console.log(JSON.stringify(msg));
    return this.http.post(url, msg).toPromise();
  }
}
