import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostPlayerItemComponent } from './ghost-player-item.component';

describe('GhostPlayerItemComponent', () => {
  let component: GhostPlayerItemComponent;
  let fixture: ComponentFixture<GhostPlayerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostPlayerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostPlayerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
