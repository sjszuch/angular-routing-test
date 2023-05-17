import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOneComponent } from './location-one.component';

describe('LocationOneComponent', () => {
  let component: LocationOneComponent;
  let fixture: ComponentFixture<LocationOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationOneComponent]
    });
    fixture = TestBed.createComponent(LocationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
