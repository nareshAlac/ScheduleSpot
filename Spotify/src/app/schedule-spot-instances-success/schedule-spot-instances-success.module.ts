import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ScheduleSpotInstancesSuccessComponent} from './schedule-spot-instances-success.component';
import {SchedularService} from '../schedule-spot-instances/SchedularService';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [ScheduleSpotInstancesSuccessComponent],
  exports: [
    ScheduleSpotInstancesSuccessComponent
  ],
  providers: [
  SchedularService
]
})
export class ScheduleSpotInstancesSuccessModule { }
