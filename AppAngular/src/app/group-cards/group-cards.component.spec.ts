import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardsComponent } from './group-cards.component';

describe('GroupCardsComponent', () => {
  let component: GroupCardsComponent;
  let fixture: ComponentFixture<GroupCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
