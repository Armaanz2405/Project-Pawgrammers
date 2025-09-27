import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPage3 } from './quiz-page-3';

describe('QuizPage3', () => {
  let component: QuizPage3;
  let fixture: ComponentFixture<QuizPage3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPage3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPage3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
