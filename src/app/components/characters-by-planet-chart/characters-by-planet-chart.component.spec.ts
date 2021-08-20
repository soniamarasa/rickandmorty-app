import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersByPlanetChartComponent } from './characters-by-planet-chart.component';

describe('CharactersByPlanetChartComponent', () => {
  let component: CharactersByPlanetChartComponent;
  let fixture: ComponentFixture<CharactersByPlanetChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersByPlanetChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersByPlanetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
