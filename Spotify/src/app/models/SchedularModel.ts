import {BaseModel} from './BaseModel';

export class SchedularModel extends BaseModel{
  region: string[];
  bidPrice: string;
  numOfInstances: number;
  instanceType: string[];
  amiId: string[];
  securityGroup: string[];
  sshKeyPair: string;
  list: SchedularModel[];

}
