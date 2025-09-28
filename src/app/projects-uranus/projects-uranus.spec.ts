import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsUranus } from './projects-uranus';

describe('ProjectsUranus', () => {
  let component: ProjectsUranus;
  let fixture: ComponentFixture<ProjectsUranus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsUranus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsUranus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
