import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProfileSongsComponent } from './modal-profile-songs.component';

describe('ModalProfileSongsComponent', () => {
  let component: ModalProfileSongsComponent;
  let fixture: ComponentFixture<ModalProfileSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProfileSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProfileSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
