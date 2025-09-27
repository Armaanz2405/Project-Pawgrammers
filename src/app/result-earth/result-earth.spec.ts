import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEarth } from './result-earth';

describe('ResultEarth', () => {
  let component: ResultEarth;
  let fixture: ComponentFixture<ResultEarth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultEarth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultEarth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
