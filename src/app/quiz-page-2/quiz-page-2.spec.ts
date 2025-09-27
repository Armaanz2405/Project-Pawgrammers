import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPage2 } from './quiz-page-2';

describe('QuizPage2', () => {
  let component: QuizPage2;
  let fixture: ComponentFixture<QuizPage2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPage2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPage2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
