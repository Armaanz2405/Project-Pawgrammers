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

  constructor(private router: Router) {}

  moveLeft() {
    this.currentIndex =
      (this.currentIndex - 1 + this.orbitItems.length) % this.orbitItems.length;
  }

  moveRight() {
    this.currentIndex =
      (this.currentIndex + 1) % this.orbitItems.length;
  }

  goToResults() {
    this.router.navigate(['/result-earth']);
  }
}
