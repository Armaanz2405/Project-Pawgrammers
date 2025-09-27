import { Routes } from '@angular/router';
import { SignupPage } from './signup-page/signup-page';
import { QuizPage1 } from './quiz-page-1/quiz-page-1';

export const routes: Routes = [
  { path: '', component: SignupPage },
  { path: 'quiz-page-1', component: QuizPage1 },
];
