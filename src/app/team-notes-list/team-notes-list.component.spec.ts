import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNotesListComponent } from './team-notes-list.component';

describe('TeamNotesListComponent', () => {
  let component: TeamNotesListComponent;
  let fixture: ComponentFixture<TeamNotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamNotesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
