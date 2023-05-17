import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationThreeComponent } from './location-three.component';

describe('LocationThreeComponent', () => {
  let component: LocationThreeComponent;
  let fixture: ComponentFixture<LocationThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationThreeComponent]
    });
    fixture = TestBed.createComponent(LocationThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
