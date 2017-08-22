import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLayout2ColComponent } from './content-layout-2col.component';

describe('ContentLayoutComponent', () => {
  let component: ContentLayout2ColComponent;
  let fixture: ComponentFixture<ContentLayout2ColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLayout2ColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLayout2ColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
