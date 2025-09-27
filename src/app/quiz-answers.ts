import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizAnswers {
  answers: string[] = Array(12).fill('');


  getAllAnswers(): string[] {
    return [...this.answers];
  }
}
