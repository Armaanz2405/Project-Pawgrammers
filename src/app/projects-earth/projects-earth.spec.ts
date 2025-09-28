import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEarth } from './projects-earth';

describe('ProjectsEarth', () => {
  let component: ProjectsEarth;
  let fixture: ComponentFixture<ProjectsEarth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsEarth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEarth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
