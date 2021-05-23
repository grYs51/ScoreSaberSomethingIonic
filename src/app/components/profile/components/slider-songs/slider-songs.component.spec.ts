import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSongsComponent } from './slider-songs.component';

describe('SliderSongsComponent', () => {
  let component: SliderSongsComponent;
  let fixture: ComponentFixture<SliderSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
