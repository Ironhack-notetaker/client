import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNoteItemComponent } from './team-note-item.component';

describe('TeamNoteItemComponent', () => {
  let component: TeamNoteItemComponent;
  let fixture: ComponentFixture<TeamNoteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamNoteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNoteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
