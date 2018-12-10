import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../common/LoggerService/logger.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private log: LoggerService,
              private router: Router,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  }

  toggleTimeline(id: number) {
    this.log.debug('ID Pressed :' + id);
    switch (id) {
      case 1:
        this.spinner.show();
        this.router.navigate(['/dashboard/dashBoardSummary']);
        this.spinner.hide();
        break;
      case 2:
        this.spinner.show();
        this.router.navigate(['/dashboard/manageSpotInstances']);
        this.spinner.hide();
        break;
      case 3:
        this.spinner.show();
        this.router.navigate(['/dashboard/spotInstancePredictor']);
        this.spinner.hide();
        break;
      case 4:
        this.spinner.show();
        this.router.navigate(['/dashboard/scheduleSpotInstances']);
        this.spinner.hide();
        break;
      case 5:
        this.spinner.show();
        this.router.navigate(['/login']);
        this.spinner.hide();
        break;
      default:
        return;
    }
  }

}
