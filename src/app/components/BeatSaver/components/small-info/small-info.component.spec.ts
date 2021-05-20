import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInfoComponent } from './small-info.component';

describe('SmallInfoComponent', () => {
  let component: SmallInfoComponent;
  let fixture: ComponentFixture<SmallInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
