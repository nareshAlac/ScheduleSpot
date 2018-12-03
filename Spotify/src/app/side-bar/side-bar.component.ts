import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../common/LoggerService/logger.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private log: LoggerService,
              private router: Router) {
  }

  ngOnInit() {
  }

  toggleTimeline(id: number) {
    this.log.debug('ID Pressed :' + id);
    switch (id) {
      case 1:
        this.router.navigate(['/dashboard/dashBoardSummary']);
        break;
      case 2:
        this.router.navigate(['/dashboard/manageSpotInstances']);
        break;
      case 3:
        this.router.navigate(['/dashboard/spotInstancePredictor']);
        break;
      default:
        return;
    }
  }
}
