import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAddItemComponent } from './player-add-item.component';

describe('PlayerAddItemComponent', () => {
  let component: PlayerAddItemComponent;
  let fixture: ComponentFixture<PlayerAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
