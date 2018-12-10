import {BaseModel} from './BaseModel';

export class SchedularModel {
  regions: string[];
  bidPrice: string;
  numOfInstances: number;
  instanceTypes: string[];
  amiIds: object[];
  securityGroups: string[];
  sshKeyPairs: string;

  region: string;
  instanceType: string;
  amiId: string;
  securityGroup: string;
  sshKeyPair: string;
  list: SchedularModel[];

  scheduleStartDate: any;
  scheduleEndDate: any;
  scheduleDays: any;
}
