import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPageNavComponent } from './in-page-nav.component';

describe('InPageNavComponent', () => {
  let component: InPageNavComponent;
  let fixture: ComponentFixture<InPageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
