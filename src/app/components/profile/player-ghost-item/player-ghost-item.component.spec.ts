import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGhostItemComponent } from './player-ghost-item.component';

describe('PlayerGhostItemComponent', () => {
  let component: PlayerGhostItemComponent;
  let fixture: ComponentFixture<PlayerGhostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerGhostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGhostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
