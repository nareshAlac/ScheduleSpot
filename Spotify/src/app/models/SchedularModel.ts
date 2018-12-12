import {BaseModel} from './BaseModel';
import {AMI} from './AMI';

export class SchedularModel extends BaseModel {
  regions: string[];
  bidPrice: string;
  numOfInstances: number;
  instanceTypes: string[];
  amiIds: AMI[];
  securityGroups: string[];
  sshKeyPairs: string;

  region: string;
  instanceType: string;
  amiId: string;
  securityGroup: string;
  sshKeyPair: string;

  scheduleStartDate: string;
  scheduleEndDate: string;
  scheduleDays: string[];
}
