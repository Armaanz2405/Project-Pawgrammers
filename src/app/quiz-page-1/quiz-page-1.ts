import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuizAnswers } from '../quiz-answers';

@Component({
  selector: 'app-quiz-page-1',
  imports: [FormsModule, RouterModule],
  templateUrl: './quiz-page-1.html',
  styleUrl: './quiz-page-1.css'
})
export class QuizPage1 {
  constructor(public quizService: QuizAnswers, private router: Router) {}

  nextPage() {
    // Ensure all questions are answered
    const unanswered = this.quizService.answers['quiz1'].some(ans => !ans.trim());
    if (unanswered) {
      alert('Please answer all questions before proceeding.');
      return;
    }

    this.router.navigate(['/quiz-page-2']);
  }
}
