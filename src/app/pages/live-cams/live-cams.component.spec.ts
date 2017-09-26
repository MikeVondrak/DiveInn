import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCamsComponent } from './live-cams.component';

describe('LiveCamsComponent', () => {
  let component: LiveCamsComponent;
  let fixture: ComponentFixture<LiveCamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
