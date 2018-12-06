import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSpotInstancesComponent } from './schedule-spot-instances.component';

describe('ScheduleSpotInstancesComponent', () => {
  let component: ScheduleSpotInstancesComponent;
  let fixture: ComponentFixture<ScheduleSpotInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleSpotInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSpotInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
