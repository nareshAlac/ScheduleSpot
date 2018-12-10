import {Errorcodes} from './errorcodes';

export class BaseModel {
  responseMessage: string;
  userId: number;
  errorCodes: Array<Errorcodes>;
}
