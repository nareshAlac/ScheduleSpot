import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {LoggerService} from './common/LoggerService/logger.service';
import {HttpClientModule} from '@angular/common/http';
import {DashboardModule} from './dashboard/dashboard.module';
import {TitleBarModule} from './title-bar/title-bar.module';
import {SideBarModule} from './side-bar/side-bar.module';
import {TimelineModule} from './timeline/timeline.module';
import {CreateRequestModule} from './create-request/create-request.module';
import {ManageSpotInstancesModule} from './manage-spot-instances/manage-spot-instances.module';
import {SpotRequestPredictorModule} from './spot-request-predictor/spot-request-predictor.module';
import {DashboardSummaryModule} from "./dashboard-summary/dashboard-summary.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    CustomMaterialModule,
    DashboardModule,
    TitleBarModule,
    SideBarModule,
    TimelineModule,
    CreateRequestModule,
    SpotRequestPredictorModule,
    ManageSpotInstancesModule,
    DashboardSummaryModule
  ],
  providers: [
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
