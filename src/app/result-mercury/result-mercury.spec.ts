import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMercury } from './result-mercury';

describe('ResultMercury', () => {
  let component: ResultMercury;
  let fixture: ComponentFixture<ResultMercury>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultMercury]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultMercury);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
