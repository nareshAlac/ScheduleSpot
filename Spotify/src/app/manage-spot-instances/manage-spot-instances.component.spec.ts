import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSpotInstancesComponent } from './manage-spot-instances.component';

describe('ManageSpotInstancesComponent', () => {
  let component: ManageSpotInstancesComponent;
  let fixture: ComponentFixture<ManageSpotInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSpotInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSpotInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
