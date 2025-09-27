import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsMap } from './planets-map';

describe('PlanetsMap', () => {
  let component: PlanetsMap;
  let fixture: ComponentFixture<PlanetsMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetsMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetsMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
