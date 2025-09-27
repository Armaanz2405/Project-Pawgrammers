import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizAnswers {
  answers: { [key: string]: string[] } = {
    'quiz1': ['', '', '', ''],
    'quiz2': ['', '', '', ''],
    'quiz3': ['', '', '', ''],
  };

  getAllAnswers(): { [key: string]: string[] } {
    return {
      quiz1: [...this.answers['quiz1']],
      quiz2: [...this.answers['quiz2']],
      quiz3: [...this.answers['quiz3']],
    };
  }
}
