import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGaurdService} from './common/AuthGaurdService/auth-gaurd.service';
import {ManageSpotInstancesComponent} from './manage-spot-instances/manage-spot-instances.component';
import {SpotRequestPredictorComponent} from './spot-request-predictor/spot-request-predictor.component';
import {DashboardSummaryComponent} from './dashboard-summary/dashboard-summary.component';
import {ScheduleSpotInstancesComponent} from './schedule-spot-instances/schedule-spot-instances.component';
import {SignoutComponent} from './signout/signout.component';
import {ScheduleSpotInstancesSuccessComponent} from './schedule-spot-instances-success/schedule-spot-instances-success.component';

const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashBoardSummary',
        pathMatch: 'full'
      },
      {
        path: 'manageSpotInstances',
        component: ManageSpotInstancesComponent
      },
      {
        path: 'spotInstancePredictor',
        component: SpotRequestPredictorComponent
      },
      {
        path: 'dashBoardSummary',
        component: DashboardSummaryComponent
      },
      {
        path: 'scheduleSpotInstances',
        component: ScheduleSpotInstancesComponent
      },
      {
        path: 'signout',
        component: SignoutComponent
      },
      {
        path: 'scheduleSpotInstancesSuccess',
        component:ScheduleSpotInstancesSuccessComponent
      }
    ],
    canActivate: [AuthGaurdService]
  },
  {
    path: '**',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
