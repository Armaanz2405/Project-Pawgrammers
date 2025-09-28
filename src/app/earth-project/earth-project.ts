import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-earth-project',
  imports: [RouterModule],
  templateUrl: './earth-project.html',
  styleUrl: './earth-project.css'
})
export class EarthProject implements OnInit, OnDestroy {

  ngOnInit() {
    document.body.style.overflow = 'auto'; // allow scrolling
  }

  ngOnDestroy() {
    document.body.style.overflow = ''; // reset when leaving page
  }
}
