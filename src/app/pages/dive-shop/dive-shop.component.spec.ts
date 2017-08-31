import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveShopComponent } from './dive-shop.component';

describe('DiveShopComponent', () => {
  let component: DiveShopComponent;
  let fixture: ComponentFixture<DiveShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
