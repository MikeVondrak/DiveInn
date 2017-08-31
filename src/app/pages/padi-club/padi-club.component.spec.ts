import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadiClubComponent } from './padi-club.component';

describe('PadiClubComponent', () => {
  let component: PadiClubComponent;
  let fixture: ComponentFixture<PadiClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadiClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadiClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
