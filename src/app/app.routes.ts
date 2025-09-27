import { Routes } from '@angular/router';
import { SignupPage } from './signup-page/signup-page';
import { QuizPage1 } from './quiz-page-1/quiz-page-1';
import { QuizPage2 } from './quiz-page-2/quiz-page-2';
import { QuizPage3 } from './quiz-page-3/quiz-page-3';
import { ResultMercury } from './result-mercury/result-mercury';
import { ResultEarth } from './result-earth/result-earth';
import { ResultJupiter } from './result-jupiter/result-jupiter';
import { ResultUranus } from './result-uranus/result-uranus';
import { PlanetsMap } from './planets-map/planets-map';

export const routes: Routes = [
  { path: '', component: SignupPage },
  { path: 'quiz-page-1', component: QuizPage1 },
  { path: 'quiz-page-2', component: QuizPage2 },
  { path: 'quiz-page-3', component: QuizPage3 },
  { path: 'result-mercury', component: ResultMercury },
  { path: 'result-earth', component: ResultEarth },
  { path: 'result-jupiter', component: ResultJupiter },
  { path: 'result-uranus', component: ResultUranus },
  { path: 'planets-map', component: PlanetsMap },
];
