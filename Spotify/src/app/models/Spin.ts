import {Time} from './Time';

export class Spin {
  region: string;
  spInUtReqId: number;
  awsRequestId: string;
  amiId: string;
  price: string;
  instanceType: string;
  secGrpId: string;
  keyName: string;
  instanceCapacity: number;
  startTime: any;
  endTime: any;
  scheduleDays: string;
  isRequestSuccess: boolean;
  startTimeSchedule: Time;
  endTimeSchedule: Time;
}
