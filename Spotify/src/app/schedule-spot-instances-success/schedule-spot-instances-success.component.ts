import { Component, OnInit } from '@angular/core';
import {SchedularService} from '../schedule-spot-instances/SchedularService';
import {LoggerService} from '../common/LoggerService/logger.service';
import {Router} from '@angular/router';
import {RootService} from '../common/RootService/root.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Spin} from '../models/Spin';
import {DaysOfWeek} from '../models/DaysOfWeek';
import {Time} from '../models/Time';

@Component({
  selector: 'app-schedule-spot-instances-success',
  templateUrl: './schedule-spot-instances-success.component.html',
  styleUrls: ['./schedule-spot-instances-success.component.css']
})
export class ScheduleSpotInstancesSuccessComponent implements OnInit {
  spInUtReqId: number;
  region: string;
  instanceType: string;
  numOfInstances: number;
  amiId: string;
  securityGroup: string;
  sshKeyPair: string;
  bidPrice: string;
  scheduleStartDate: string;
  scheduleEndDate: string;
  scheduleDays: string[] = [];
  startTime: Time;
  endTime: Time;
  resp: Spin;

  keys = Object.keys;
  daysOfWeek = DaysOfWeek;

  i: number;

  constructor(private log: LoggerService,
              private router: Router,
              private rootService: RootService,
              private spinner: NgxSpinnerService,
              private schedularService: SchedularService ) {
    this.resp = schedularService.spin;
  console.log( 'resp: ' + this.resp);
  }

  ngOnInit() {
    this.spInUtReqId = this.resp.spInUtReqId;
    this.region = this.resp.region;
    this.instanceType = this.resp.instanceType;
    this.numOfInstances = this.resp.instanceCapacity;
    this.amiId = this.resp.amiId;
    this.securityGroup = this.resp.secGrpId;
    this.sshKeyPair =  this.resp.keyName;
    this.bidPrice = this.resp.price;
    this.scheduleStartDate =  this.resp.startTime;
    this.scheduleEndDate = this.resp.endTime;
    this.scheduleDays = this.resp.scheduleDays.split(', ' , this.resp.scheduleDays.length);
    this.startTime = this.resp.startTimeSchedule;
    this.endTime = this.resp.endTimeSchedule;
    this.i = 0;
    for (const day of this.scheduleDays) {
      console.log('this.values(this.daysOfWeek)[day]' + this.keys(this.daysOfWeek)[day]);
      this.scheduleDays[this.i] = this.keys(this.daysOfWeek)[day];
      this.i ++;
    }
    console.log('scheduleDays' + this.scheduleDays);
  }
}
