import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthFlashcards } from './earth-flashcards';

describe('EarthFlashcards', () => {
  let component: EarthFlashcards;
  let fixture: ComponentFixture<EarthFlashcards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarthFlashcards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthFlashcards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
