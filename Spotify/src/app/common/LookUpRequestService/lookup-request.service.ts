import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {BaseModel} from '../../models/BaseModel';
import {LoggerService} from '../LoggerService/logger.service';
import {Errorcodes} from '../../models/errorcodes';
import {environment} from '../../../environments/environment';
import {SchedularModel} from '../../models/SchedularModel';

@Injectable({
  providedIn: 'root'
})
export class LookupRequestService {
  lookupEventData: BehaviorSubject<any>;
  handlerNameList = [];
  selectHanlder: string;
  selectedEventIdName: string;
  displayTable: boolean;
  eventHandlerName: FormControl;
  constructor(private http: HttpClient,
              private logger: LoggerService) {
    this.lookupEventData = new BehaviorSubject<any>(new Array());
  }
  getEvents(msg: Object): any {
    let resultData;
    const url = environment.baseUrl + 'a';
    this.http.post(url, msg).subscribe(data => {
       resultData = <SchedularModel> data;
      if (resultData.errorCodes !== undefined) {
        /** this.alertService.handleBackenedErrors(resultData.errorCodes) ;*/
      } else if (resultData.eventList.length <= 0) {
        const errorCode = new Errorcodes();
        errorCode.code = 1010;
        errorCode.msg = 'No Record Found for this search criteria';
/** //this.resultsTableService.displayTable.next(false) ;*/
      } else {
        /** //this.resultsTableService.resultsdata.next(resultData.eventList);*/
        /** //this.resultsTableService.displayTable.next(true);*/
        this.handlerNameList = resultData.handlerList; }});
  }
  getEventList(msg: BaseModel) {
    const url = environment.baseUrl + '/rest/spot/getrequestlist';
    return this.http.post(url, msg).toPromise();
  }
}
