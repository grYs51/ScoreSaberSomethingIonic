import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatMapItemComponent } from './beat-map-item.component';

describe('BeatMapItemComponent', () => {
  let component: BeatMapItemComponent;
  let fixture: ComponentFixture<BeatMapItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatMapItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatMapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
