import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUranus } from './result-uranus';

describe('ResultUranus', () => {
  let component: ResultUranus;
  let fixture: ComponentFixture<ResultUranus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultUranus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultUranus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
