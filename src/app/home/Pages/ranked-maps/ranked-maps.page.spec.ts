import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankedMapsPage } from './ranked-maps.page';

describe('RankedMapsPage', () => {
  let component: RankedMapsPage;
  let fixture: ComponentFixture<RankedMapsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankedMapsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankedMapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
