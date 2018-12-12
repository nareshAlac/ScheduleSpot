import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleSpotInstancesComponent } from './schedule-spot-instances.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {LoginComponent} from '../login/login.component';
import {SchedularService} from './SchedularService';
import {MAT_DATE_LOCALE} from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [ScheduleSpotInstancesComponent],
  exports: [
    ScheduleSpotInstancesComponent
  ],
  providers: [
    SchedularService,
    {provide: MAT_DATE_LOCALE, useValue: 'locale'}
]
})
export class ScheduleSpotInstancesModule { }
