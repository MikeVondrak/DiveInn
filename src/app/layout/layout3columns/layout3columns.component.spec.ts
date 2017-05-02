import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout3columnsComponent } from './layout3columns.component';

describe('Layout3columnsComponent', () => {
  let component: Layout3columnsComponent;
  let fixture: ComponentFixture<Layout3columnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout3columnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout3columnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
