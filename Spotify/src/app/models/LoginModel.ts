import {BaseModel} from './BaseModel';

export class LoginModel extends BaseModel{
  userName: string;
  password: string;
  isValidUser: boolean;
}
