import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveBuddyComponent } from './dive-buddy.component';

describe('DiveBuddyComponent', () => {
  let component: DiveBuddyComponent;
  let fixture: ComponentFixture<DiveBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
