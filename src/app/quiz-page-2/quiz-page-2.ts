import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuizAnswers } from '../quiz-answers';

@Component({
  selector: 'app-quiz-page-2',
  imports: [FormsModule, RouterModule],
  templateUrl: './quiz-page-2.html',
  styleUrl: './quiz-page-2.css'
})
export class QuizPage2 {
  constructor(public quizService: QuizAnswers, private router: Router) {}

  nextPage() {
    const unanswered = this.quizService.answers.slice(4, 8).some(ans => !ans.trim());    if (unanswered) {
      alert('Please answer all questions before proceeding.');
      return;
    }
    this.router.navigate(['/quiz-page-3']);
  }
}
