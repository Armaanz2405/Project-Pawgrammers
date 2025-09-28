import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-earth',
  templateUrl: './projects-earth.html',
  styleUrls: ['./projects-earth.css']
})
export class ProjectsEarth {
  orbitItems = [
    { name: 'Satellite', src: 'Satellite.png' },
    { name: 'Moon', src: 'Moon.png' },
    { name: 'Spaceship', src: 'Spaceship.png' }
  ];

  currentIndex = 0;
  previousIndex = 0;
  animationDirection: '' | 'left' | 'right' = '';
  isAnimating = false; // prevent double clicks

  constructor(private router: Router) {}

  moveLeft() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.previousIndex = this.currentIndex;
    this.animationDirection = 'left';
    this.currentIndex =
      (this.currentIndex - 1 + this.orbitItems.length) % this.orbitItems.length;

    setTimeout(() => {
      this.animationDirection = '';
      this.isAnimating = false;
    }, 600);
  }

  moveRight() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.previousIndex = this.currentIndex;
    this.animationDirection = 'right';
    this.currentIndex = (this.currentIndex + 1) % this.orbitItems.length;

    setTimeout(() => {
      this.animationDirection = '';
      this.isAnimating = false;
    }, 600);
  }

  goToResults() {
    this.router.navigate(['/earth-project']);
  }
}
