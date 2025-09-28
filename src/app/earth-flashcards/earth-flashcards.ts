import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-earth-flashcards',
  imports: [RouterModule, CommonModule],
  templateUrl: './earth-flashcards.html',
  styleUrl: './earth-flashcards.css'
})
export class EarthFlashcards implements OnInit, OnDestroy {

  ngOnInit() {
    document.body.style.overflow = 'auto'; // allow scrolling
  }

  ngOnDestroy() {
    document.body.style.overflow = ''; // reset when leaving page
  }

  scrollTo(sectionId: string) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
