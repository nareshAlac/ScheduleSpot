import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleSpotInstancesComponent } from './schedule-spot-instances.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {SchedularService} from './SchedularService';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
  ],
  declarations: [ScheduleSpotInstancesComponent],
  exports: [
    ScheduleSpotInstancesComponent
  ],
  providers: [
    SchedularService
  ]
})
export class ScheduleSpotInstancesModule { }
