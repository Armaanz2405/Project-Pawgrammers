import { Routes } from '@angular/router';
import { SignupPage } from './signup-page/signup-page';
import { QuizPage1 } from './quiz-page-1/quiz-page-1';
import { QuizPage2 } from './quiz-page-2/quiz-page-2';
import { QuizPage3 } from './quiz-page-3/quiz-page-3';

export const routes: Routes = [
  { path: '', component: SignupPage },
  { path: 'quiz-page-1', component: QuizPage1 },
  { path: 'quiz-page-2', component: QuizPage2 },
  { path: 'quiz-page-3', component: QuizPage3 },
];
