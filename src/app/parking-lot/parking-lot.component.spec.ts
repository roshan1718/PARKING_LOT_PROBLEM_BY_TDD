import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotComponent } from './parking-lot.component';
let car;
describe('ParkingLotComponent', () => {
  let component: ParkingLotComponent;
  let fixture: ComponentFixture<ParkingLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingLotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    car = new Object();
    fixture = TestBed.createComponent(ParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test For Add Vehicle in Parking Lot
  it(`given car object when car is parked should return true`, () => {
    const carParkedOrNot = component.isParked(car);
    expect(carParkedOrNot).toEqual(true);
  });

  // Test For Possiblities To Add Vehicle in Parking Lot
  it(`given car object when invalid and car is not parked should return exception`, () => {
    try {
      const carParkedOrNot = component.isParked(null);
      expect(carParkedOrNot).toBeFalsy();
    } catch (e) {
      console.log(e.message);
    }
  });

  // Test For Unpark Car from parking Lot
  it(`given car object when car is unpark then return true`, () => {
    component.isParked(car);
    const carParkedOrNot = component.isUnparked(car);
    expect(carParkedOrNot).toEqual(true);
  });

  // Test For Possiblities To Remove Vehicle from Parking Lot
  it(`given car object when invalid or car can't unparked should return exception`, () => {
    try {
      component.isParked(car);
      const carParkedOrNot = component.isUnparked(undefined);
      expect(carParkedOrNot).toEqual(true);
    } catch (e) {
      console.log(e.message);
    }
  });

});
