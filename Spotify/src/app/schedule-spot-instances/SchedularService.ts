import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Spin} from '../models/Spin';

@Injectable()
export class SchedularService {
  spin: Spin;
  constructor(private http: HttpClient) {
  }

  scheduleSpotInstances(schedular: any) {
    const url = environment.baseUrl + '/rest/spot/schedule';
    console.log(JSON.stringify(schedular));
    return this.http.post(url, schedular).toPromise();
  }

  createSpotSchedule() {
    const url = environment.baseUrl + '/rest/spot/createschedule';
    // console.log(JSON.stringify(schedular));
    return this.http.get(url).toPromise();
    // return this.http.post(url, '').toPromise();
  }
}
