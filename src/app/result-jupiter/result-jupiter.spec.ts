import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultJupiter } from './result-jupiter';

describe('ResultJupiter', () => {
  let component: ResultJupiter;
  let fixture: ComponentFixture<ResultJupiter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultJupiter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultJupiter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
