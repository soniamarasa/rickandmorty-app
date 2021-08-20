import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsChartComponent } from './eps-chart.component';

describe('EpsChartComponent', () => {
  let component: EpsChartComponent;
  let fixture: ComponentFixture<EpsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
