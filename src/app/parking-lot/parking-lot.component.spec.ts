import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ParkingLotComponent } from './parking-lot.component';
import { ParkingLotOwner } from './ParkingLotOwner';

describe('ParkingLotComponent', () => {
  let component: ParkingLotComponent;
  //let Owner : ParkingLotOwner;
  let fixture: ComponentFixture<ParkingLotComponent>;
  let parking;
  let car;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingLotComponent],
      imports: [HttpClientTestingModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    car = new Object();
    parking = [];
    fixture = TestBed.createComponent(ParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Test For Add Vehicle in Parking Lot
  it(`given car object when car is parked should return true`, () => {
    component.isParked(parking, car, function (result) {
      expect(result).toEqual(true);
    });
  });

  // Test For Possiblities To Add Vehicle in Parking Lot
  it(`given car object when invalid and car is not parked should return exception`, () => {
    try {
      component.isParked(parking, null, function (result) {
        expect(result).toBeFalsy();
      });
    } catch (e) {
      console.log(e.message);
    }
  });

  // Test For Unpark Car from parking Lot
  it(`given car object when car is unpark then return true`, () => {
    component.isParked(parking, car, function (result) {
      const carParkedOrNot = component.isUnparked(car);
      expect(carParkedOrNot).toEqual(true);
    });
  });

  // Test For Possiblities To Remove Vehicle from Parking Lot
  it(`given car object when invalid or car can't unparked should return exception`, () => {
    try {
      component.isParked(parking, undefined, function (result) {
        const carParkedOrNot = component.isUnparked(undefined);
        expect(carParkedOrNot).toEqual(true);
      });
    } catch (e) {
      console.log(e.message);
    }
  });
  //Test For Check The Parking Lot Is Full
  it(`given car object when park if parking full should return parking full`, () => {
    try {
      component.isParked(parking, null, function (result) {
        component.isParked(parking, null, function (result) {
          component.isParked(parking, null, function (result) {
            expect(result).toEqual(true);
          });
          expect(result).toEqual(true);
        });
        expect(result).toEqual(true);
      });
    } catch (e) {
      console.log(e.message);
    }
  });

});
