import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTwoComponent } from './location-two.component';

describe('LocationTwoComponent', () => {
  let component: LocationTwoComponent;
  let fixture: ComponentFixture<LocationTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationTwoComponent]
    });
    fixture = TestBed.createComponent(LocationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
