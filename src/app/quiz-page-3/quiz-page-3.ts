import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuizAnswers } from '../quiz-answers';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-quiz-page-3',
  imports: [FormsModule, RouterModule],
  templateUrl: './quiz-page-3.html',
  styleUrl: './quiz-page-3.css'
})
export class QuizPage3 {

  quizService = inject(QuizAnswers);
  http = inject(HttpClient);
  router = inject(Router);

  submit() {
    // Validate all 4 answers on page 3 (indexes 8-11)
    const unanswered = this.quizService.answers.slice(8, 12).some(ans => !ans.trim());
    if (unanswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    // Send all 12 answers to Flask backend
    const allAnswers = this.quizService.getAllAnswers();
    this.http.post<any>('https://project-pawgrammers.onrender.com/submit-quiz', allAnswers)
      .subscribe({
        next: (res) => {
          if (res.status === 'success') {
            const nextPage = res.next_page; // e.g. "/result-jupiter"
            console.log('Rating:', res.rating);
            console.log('Next page:', nextPage);

            // Navigate to the page returned by Flask
            this.router.navigate(['/' + nextPage]);
          } else {
            alert('Error submitting quiz: ' + res.message);
          }
        },
        error: (err) => {
          console.error('Submission error:', err);
          alert('Error submitting quiz. Please try again.');
        }
      });
  }
}
