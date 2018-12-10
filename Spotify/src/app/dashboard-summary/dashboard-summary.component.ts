import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {LoggerService} from '../common/LoggerService/logger.service';
import {Router} from '@angular/router';
import {RootService} from '../common/RootService/root.service';
import {LookupRequestService} from '../common/LookUpRequestService/lookup-request.service';
import {BaseModel} from '../models/BaseModel';
import {SchedularModel} from '../models/SchedularModel';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {
  gridDefinitionList: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
   eventSearchResultData: Array<any>;
  displayedColumns: string[];
  dataSource = new MatTableDataSource();

  constructor(private log: LoggerService,
              private router: Router, private rootService: RootService, private lookupRequestService: LookupRequestService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.log.debug('ngOnInit ****** LookupLogsSearchResultTableComponent');
    this.log.debug(this.eventSearchResultData);
    this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource();
    this.getEventLogsList();
  }
  private assignPagination() {
    this.dataSource.paginator = this.paginator;
  }
  private initalizeLookUpEventLogsData() {
    if (this.eventSearchResultData.length > 0) {
      this.dataSource.data = new Array();
      this.gridDefinitionList = ['S.No', 'AMI ID', 'Instance Type', 'Security Group', 'No .of Instances'];
    }
    this.displayedColumns = new Array();
    for (const grid of this.gridDefinitionList) {
      this.displayedColumns.push(grid);
    }
    // this.dataSource = this.resultsTableService.resultsdata;
    let count = 0;
    for (const result of this.eventSearchResultData) {
      const rowEntry = {
        key: '',
        value: ''
      };
      rowEntry['S.No'] = ++count;
      rowEntry['AMI ID'] = result.amiId;
      rowEntry['Instance Type'] = result.instanceType;
      rowEntry['Security Group'] = result.securityGroup;
      rowEntry['No .of Instances'] = result.numOfInstances;
      this.dataSource.data.push(rowEntry);
    }
  }

  public redirectToLogDetails(eventLogId: number) {
    this.log.debug('redirectToLogDetails : ' + eventLogId);
    this.router.navigate(['/userHome/lookup-event-logs-details' , eventLogId]);
  }
  public getEventLogsList() {
    const msg = new BaseModel();
    msg.userId = this.rootService.userId;
    this.spinner.show();
    this.lookupRequestService.getEventList(msg).then((resp) => {
      this.log.debug('Response for getEventLogsList');
      this.log.debug(resp);
      this.spinner.hide();
      const data = <Array<SchedularModel>> resp;
      this.log.debug(data);
      /**if (data.errorCodes != null && data.errorCodes !== undefined) {
        this.alertService.handleBackenedErrors(data.errorCodes);
      } else {*/
        this.eventSearchResultData = data;
        this.initalizeLookUpEventLogsData();
        this.assignPagination();
     /** }*/
    }).catch((err) => {
      this.log.debug(err);
      this.router.navigate(['/userHome/access-denied']);
    });
  }
}
