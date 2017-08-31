import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveNewsComponent } from './dive-news.component';

describe('DiveNewsComponent', () => {
  let component: DiveNewsComponent;
  let fixture: ComponentFixture<DiveNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
