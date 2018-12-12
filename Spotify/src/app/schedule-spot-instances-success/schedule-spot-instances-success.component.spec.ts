import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSpotInstancesSuccessComponent } from './schedule-spot-instances-success.component';

describe('ScheduleSpotInstancesSuccessComponent', () => {
  let component: ScheduleSpotInstancesSuccessComponent;
  let fixture: ComponentFixture<ScheduleSpotInstancesSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleSpotInstancesSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSpotInstancesSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
