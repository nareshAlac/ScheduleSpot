import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../common/LoggerService/logger.service';
import {RootService} from '../common/RootService/root.service';
import {BaseModel} from '../models/BaseModel';
import {SchedularModel} from '../models/SchedularModel';
import {FormControl, FormGroup} from '@angular/forms';
import {SchedularService} from './SchedularService';
import {Router} from '@angular/router';
import {DaysOfWeek} from '../models/DaysOfWeek';
import {LoginModel} from '../models/LoginModel';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-schedule-spot-instances',
  templateUrl: './schedule-spot-instances.component.html',
  styleUrls: ['./schedule-spot-instances.component.css']
})
export class ScheduleSpotInstancesComponent implements OnInit {
  schedularForm: FormGroup;
  bidPrice = new FormControl('');
  region = new FormControl('');
  instanceType = new FormControl('');
  amiId = new FormControl('');
  securityGroup = new FormControl('');
  sshKeyPair = new FormControl('');

  scheduleStartDate = new FormControl('');
  scheduleEndDate = new FormControl('');
  scheduleDays = new FormControl('');
  numOfInstances = new FormControl('');

  regions: string[];
  sshKeyPairs: string[];
  instanceTypes: string[];
  amiIds: string[];
  securityGroups: string[];

  keys = Object.keys;
  daysOfWeek = DaysOfWeek;


  constructor(private schedularService: SchedularService,
              private log: LoggerService,
              private router: Router,
              private rootService: RootService,
              private spinner: NgxSpinnerService) {
    this.schedularForm = new FormGroup({
      bidPrice: this.bidPrice,
      region: this.region,
      instanceType: this.instanceType,
      amiId: this.amiId,
      numOfInstances: this.numOfInstances,
      securityGroup: this.securityGroup,
      sshKeyPair: this.sshKeyPair,
      scheduleStartDate: this.scheduleStartDate,
      scheduleEndDate: this.scheduleEndDate,
      scheduleDays: this.scheduleDays,
    });
  }

  ngOnInit() {
    this.spinner.show();
  this.schedularService.createSpotSchedule()
  .then((resp) => {
    this.log.debug('Success Response from create schedule Request');
    this.log.debug(resp);
    this.spinner.hide();
  })
  .catch((err) => {
    this.log.debug('Error Response from create schedule Request');
    this.log.debug(err);
    this.spinner.hide();
  });
  }


  schedule() {
    this.log.debug('schedule button clicked');
    this.log.debug('bidPrice : ' + this.bidPrice.value);
    this.log.debug('instanceType : ' + this.instanceType.value);
    this.log.debug('daysOfWeek : ' + this.scheduleDays.value);
    const schedular = new SchedularModel();
    schedular.region = this.region.value;
    schedular.bidPrice = this.bidPrice.value;
    schedular.instanceType = this.instanceType.value;
    schedular.amiId = this.amiId.value;
    schedular.numOfInstances = this.numOfInstances.value;
    schedular.securityGroup = this.securityGroup.value;
    schedular.sshKeyPair = this.sshKeyPair.value;
    schedular.scheduleDays = this.scheduleDays.value;
    this.schedularService.scheduleSpotInstances(schedular)
      .then((resp) => {
        this.log.debug('Success Response from Schedule Spot Request');
        this.log.debug(resp);
        const data = <BaseModel>resp;
        this.log.debug(data.responseMessage);
        this.rootService.loginSuccessfull = true;
        this.log.debug('Redirecting to Dashboard');
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.log.debug('Error Response from Schedule Spot Request');
        this.log.debug(err);
      });
  }


}

