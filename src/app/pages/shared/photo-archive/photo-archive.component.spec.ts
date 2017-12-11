import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoArchiveComponent } from './photo-archive.component';

describe('PhotoArchiveComponent', () => {
  let component: PhotoArchiveComponent;
  let fixture: ComponentFixture<PhotoArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
