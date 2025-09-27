import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuizAnswers } from '../quiz-answers';

@Component({
  selector: 'app-quiz-page-3',
  imports: [FormsModule, RouterModule],
  templateUrl: './quiz-page-3.html',
  styleUrl: './quiz-page-3.css'
})
export class QuizPage3 {
  constructor(public quizService: QuizAnswers) {}

  submit() {
    const unanswered = this.quizService.answers.slice(8, 12).some(ans => !ans.trim());    if (unanswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    const allAnswers = this.quizService.getAllAnswers();
    console.log('All answers:', allAnswers);
    // TODO: send allAnswers to backend
    alert('Quiz submitted successfully!');
  }
}
