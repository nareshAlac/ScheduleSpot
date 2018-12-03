import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotRequestPredictorComponent } from './spot-request-predictor.component';

describe('SpotRequestPredictorComponent', () => {
  let component: SpotRequestPredictorComponent;
  let fixture: ComponentFixture<SpotRequestPredictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotRequestPredictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotRequestPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
