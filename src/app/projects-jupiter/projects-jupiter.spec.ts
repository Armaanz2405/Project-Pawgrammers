import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsJupiter } from './projects-jupiter';

describe('ProjectsJupiter', () => {
  let component: ProjectsJupiter;
  let fixture: ComponentFixture<ProjectsJupiter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsJupiter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsJupiter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
