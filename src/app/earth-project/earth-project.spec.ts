import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthProject } from './earth-project';

describe('EarthProject', () => {
  let component: EarthProject;
  let fixture: ComponentFixture<EarthProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarthProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
