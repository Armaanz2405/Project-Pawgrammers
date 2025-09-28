import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMercury } from './projects-mercury';

describe('ProjectsMercury', () => {
  let component: ProjectsMercury;
  let fixture: ComponentFixture<ProjectsMercury>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsMercury]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsMercury);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
