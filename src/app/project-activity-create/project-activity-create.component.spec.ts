import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectActivityCreateComponent } from './project-activity-create.component';

describe('ProjectActivityCreateComponent', () => {
  let component: ProjectActivityCreateComponent;
  let fixture: ComponentFixture<ProjectActivityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectActivityCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectActivityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
