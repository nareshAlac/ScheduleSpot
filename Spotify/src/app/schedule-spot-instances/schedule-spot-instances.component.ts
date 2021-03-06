import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../common/LoggerService/logger.service';
import {RootService} from '../common/RootService/root.service';
import {SchedularModel} from '../models/SchedularModel';
import {FormControl, FormGroup} from '@angular/forms';
import {SchedularService} from './SchedularService';
import {Router} from '@angular/router';
import {DaysOfWeek} from '../models/DaysOfWeek';
import {NgxSpinnerService} from 'ngx-spinner';
import {AMI} from '../models/AMI';
import {ScheduleRequestSpec} from '../models/ScheduleRequestSpec';
import { ReplaySubject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {SecurityGroup} from '../models/SecurityGroup';
import {Spin} from '../models/Spin';

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
  amiFilterId = new FormControl('');
  startTime = new FormControl('');
  endTime = new FormControl('');
  scheduleRequest = new ScheduleRequestSpec();
  /** control for the MatSelect filter keyword */
  public filteredAmis: ReplaySubject<AMI[]> = new ReplaySubject<AMI[]>(1);
  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  minDate = new Date();

  scheduleStartDate = new FormControl(new Date());
  scheduleEndDate = new FormControl(new Date());
  scheduleDays = new FormControl('');
  numOfInstances = new FormControl('');

  d = new Date();
  e = new Date();
  startTimeNGB = new FormControl({hour: this.d.getHours(), minute: this.d.getMinutes()});
  // timeObj = JSON.stringify(this.time.value);
  endTimeNGB = new FormControl({hour: (this.e.getHours() + 1), minute: (this.e.getMinutes())});
  regions: string[];
  sshKeyPairs: string[];
  instanceTypes: string[];
  amiIds: Array<AMI>;
  securityGroups: Array<SecurityGroup>;

  keys = Object.keys;
  daysOfWeek = DaysOfWeek;


  // this.time = {hour: this.d.getHours(), minute: this.d.getMinutes()};


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
      amiFilterId: this.amiFilterId,
      numOfInstances: this.numOfInstances,
      securityGroup: this.securityGroup,
      sshKeyPair: this.sshKeyPair,
      scheduleStartDate: this.scheduleStartDate,
      scheduleEndDate: this.scheduleEndDate,
      scheduleDays: this.scheduleDays,
      startTime: this.startTime,
      endTime: this.endTime,
      startTimeNGB: this.startTimeNGB,
      endTimeNGB: this.endTimeNGB,
      // timeObj: this.timeObj
    });

  }

  ngOnInit() {
    this.spinner.show();
  this.schedularService.createSpotSchedule()
  .then((resp) => {
    this.log.debug('Success Response from create schedule Request');
    const  data = <ScheduleRequestSpec> resp;
    this.log.debug(data);
    this.amiIds = data.amiIds;
    this.regions = data.regions;
    this.instanceTypes = data.instanceTypes;
    this.securityGroups = data.securityGroups;
    this.sshKeyPairs = data.keypairs;
    // set initial selection
    this.amiId.setValue(this.amiIds[10]);
    this.filteredAmis.next(this.amiIds.slice());
    // listen for search field value changes
    // listen for search field value changes
    this.amiFilterId.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
    this.spinner.hide();
  })
  .catch((err) => {
    this.log.debug('Error Response from create schedule Request');
    this.log.debug(err);
    this.spinner.hide();
  });
  }


  schedule() {
    this.spinner.show();
    this.log.debug('schedule button clicked');
    this.log.debug('bidPrice : ' + this.bidPrice.value);
    this.log.debug('instanceType : ' + this.instanceType.value);
    this.log.debug('daysOfWeek : ' + this.scheduleDays.value);
    const scheduler = new SchedularModel();
    scheduler.region = this.region.value;
    scheduler.bidPrice = this.bidPrice.value;
    scheduler.instanceType = this.instanceType.value;
    scheduler.amiId = this.amiId.value;
    scheduler.numOfInstances = this.numOfInstances.value;
    scheduler.securityGroup = this.securityGroup.value;
    scheduler.sshKeyPair = this.sshKeyPair.value;
    scheduler.scheduleStartDate = this.scheduleStartDate.value;
    scheduler.scheduleEndDate = this.scheduleEndDate.value;
    scheduler.scheduleDays = this.scheduleDays.value;
    scheduler.userId = this.rootService.userId;
    scheduler.startTimeSchedule = this.startTimeNGB.value;
    scheduler.endTimeSchedule = this.endTimeNGB.value;
    this.schedularService.scheduleSpotInstances(scheduler)
      .then((resp) => {
        console.log('Success Response from Schedule Spot Request');
        console.log(resp);
        const  data = <Spin> resp;
        if (data.isRequestSuccess === true) {
          this.schedularService.spin = data;
          console.log('Redirecting to Schedule Spot Request Success Page');
          this.router.navigate(['/dashboard/scheduleSpotInstancesSuccess']);
        } else {
          console.log('Redirecting to Schedule Spot Request Page');
          this.router.navigate(['/dashboard/scheduleSpotInstances']);
        }
        this.spinner.hide();
      })
      .catch((err) => {
        this.log.debug('Error Response from Schedule Spot Request');
        this.log.debug(err);
      });
  }

  private filterBanks() {
    if (!this.amiIds) {
      return;
    }
    // get the search keyword
    let search = this.amiFilterId.value;
    if (!search) {
      this.filteredAmis.next(this.amiIds.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredAmis.next(
      this.amiIds.filter(bank => bank.desc.toLowerCase().indexOf(search) > -1)
    );
  }


}

