import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlayerProfileComponent } from './view-player-profile.component';

describe('ViewPlayerProfileComponent', () => {
  let component: ViewPlayerProfileComponent;
  let fixture: ComponentFixture<ViewPlayerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlayerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlayerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
