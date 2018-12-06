import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../common/LoggerService/logger.service';
import {RootService} from '../common/RootService/root.service';
import {BaseModel} from '../models/BaseModel';
import {SchedularModel} from '../models/SchedularModel';
import {FormControl, FormGroup} from '@angular/forms';
import {SchedularService} from './SchedularService';
import {Router} from '@angular/router';


@Component({
  selector: 'app-schedule-spot-instances',
  templateUrl: './schedule-spot-instances.component.html',
  styleUrls: ['./schedule-spot-instances.component.css']
})
export class ScheduleSpotInstancesComponent implements OnInit {
  schedularForm: FormGroup;
  region = new FormControl('');
  bidPrice = new FormControl('');
  numOfInstances = new FormControl('');
  sshKeyPair = new FormControl('');
  instanceType = new FormControl('');
  amiId = new FormControl('');
  securityGroup = new FormControl('');


  constructor(private schedularService: SchedularService,
              private log: LoggerService,
              private router: Router,
              private rootService: RootService) {
    this.schedularForm = new FormGroup({
      region: this.region,
      bidPrice: this.bidPrice,
      numOfInstances: this.numOfInstances,
      sshKeyPair: this.sshKeyPair,
      instanceType: this.instanceType,
      amiId: this.amiId,
      securityGroup: this.securityGroup
    });
  }

  ngOnInit() {
  }

  schedule() {
    this.log.debug('schedule button clicked');
    this.log.debug('bidPrice : ' + this.bidPrice.value);
    this.log.debug('instanceType : ' + this.instanceType.value);
    const schedular = new SchedularModel();
    schedular.bidPrice = this.bidPrice.value;
    schedular.numOfInstances = this.numOfInstances.value;
    schedular.instanceType = this.instanceType.value;
    schedular.amiId = this.amiId.value;
    schedular.securityGroup = this.securityGroup.value;
    schedular.sshKeyPair = this.sshKeyPair.value;
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
