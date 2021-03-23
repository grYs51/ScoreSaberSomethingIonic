import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatMapPagePage } from './beat-map-page.page';

describe('BeatMapPagePage', () => {
  let component: BeatMapPagePage;
  let fixture: ComponentFixture<BeatMapPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatMapPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatMapPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
