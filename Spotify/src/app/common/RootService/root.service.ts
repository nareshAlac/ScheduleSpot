import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RootService {
  loginSuccessfull: boolean;
  userId: number;

  constructor() {
  }
}
