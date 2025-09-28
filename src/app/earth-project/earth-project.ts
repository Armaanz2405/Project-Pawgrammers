import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-earth-project',
  imports: [RouterModule],
  templateUrl: './earth-project.html',
  styleUrls: ['./earth-project.css']
})
export class EarthProject implements OnInit, OnDestroy {
  
  private router = inject(Router);

  ngOnInit() {
    document.body.style.overflow = 'auto'; // allow scrolling
  }

  ngOnDestroy() {
    document.body.style.overflow = ''; // reset when leaving page
  }

  // Navigate to collaborate page
  goToCollaborate() {
    this.router.navigate(['/collaborate']);
  }
}
