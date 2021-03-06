import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsPage } from './friends.page';

describe('FriendsPage', () => {
  let component: FriendsPage;
  let fixture: ComponentFixture<FriendsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
