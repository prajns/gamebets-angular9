import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamModifyComponent } from './team-modify.component';

describe('TeamModifyComponent', () => {
  let component: TeamModifyComponent;
  let fixture: ComponentFixture<TeamModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
