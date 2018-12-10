import {AMI} from './AMI';

export class ScheduleRequestSpec {
  amiIds: Array<AMI>;
  instanceTypes: string[];
  keypairs: string[];
  securityGroups: string[];
}
