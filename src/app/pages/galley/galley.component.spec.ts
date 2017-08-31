import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleyComponent } from './galley.component';

describe('GalleyComponent', () => {
  let component: GalleyComponent;
  let fixture: ComponentFixture<GalleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
