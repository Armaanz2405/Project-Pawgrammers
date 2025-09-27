import { TestBed } from '@angular/core/testing';

import { QuizAnswers } from './quiz-answers';

describe('QuizAnswers', () => {
  let service: QuizAnswers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAnswers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
