import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSummaryComponent } from './dashboard-summary.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [DashboardSummaryComponent]
})
export class DashboardSummaryModule { }
