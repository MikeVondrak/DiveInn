import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout1columnComponent } from './layout1column.component';

describe('Layout1columnComponent', () => {
  let component: Layout1columnComponent;
  let fixture: ComponentFixture<Layout1columnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout1columnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout1columnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
