import {AMI} from './AMI';
import {SecurityGroup} from '../models/SecurityGroup';

export class ScheduleRequestSpec {
  amiIds: Array<AMI>;
  instanceTypes: string[];
  keypairs: string[];
  securityGroups: SecurityGroup[];
  regions: string[];
}
