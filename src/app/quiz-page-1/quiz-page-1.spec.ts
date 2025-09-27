import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPage1 } from './quiz-page-1';

describe('QuizPage1', () => {
  let component: QuizPage1;
  let fixture: ComponentFixture<QuizPage1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPage1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPage1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
