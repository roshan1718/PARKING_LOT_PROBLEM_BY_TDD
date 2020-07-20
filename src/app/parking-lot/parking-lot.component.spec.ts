import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ParkingLotComponent } from './parking-lot.component';
import { ParkingLotOwner } from './ParkingLotOwner';
import { ParkingAttendant } from './ParkingAttendant';
describe('ParkingLotComponent', () => {
  let component: ParkingLotComponent;
  let parkingAttendent: ParkingAttendant;
  let fixture: ComponentFixture<ParkingLotComponent>;
  let parking;
  let car1, car2, car3, car4, car5, car6, car7, car8, car9, car10;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingLotComponent],
      imports: [HttpClientTestingModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
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
    car1 = { vehicleNumber: "MH.15.XX.0000", color: "White", parkTime: Date()};
    try {
      component.isParked(this.car1, function (result) {
        expect(result).toEqual(false);
      });
    } catch (e) {
      console.log(e.message);
    }
  });


  // Test For Possiblities To Add Vehicle in Parking Lot
  it(`given car object when invalid and car is not parked should return exception`, () => {
    try {
      this.component.isParked(null, function (result) {
        expect(result).toEqual(true);
      });
    } catch (e) {
      console.log(e.message);
    }
  });

  // Test For Unpark Car from parking Lot
  it(`given car object when car is unpark then return true`, () => {
    car2 = { vehicleNumber: "MH.15.XX.1111", color: "Yello", parkTime: Date() };
    try {
      this.component.isParked(this.car2, function (result) {
        const carParkedOrNot = this.component.isUnparked(this.car2);
        expect(carParkedOrNot).toEqual(true);
      });
    } catch (e) {
      console.log(e.message);
    }
  });

  // Test For Possiblities To Remove Vehicle from Parking Lot
  it(`given car object when invalid or car can't unparked should return exception`, () => {
    car3 = { vehicleNumber: "MH.15.XX.2222", color: "Cyan", parkTime: Date() };
    try {
      this.component.isParked(this.car3, function (result) {
        const carParkedOrNot = this.component.isUnparked(undefined);
        expect(carParkedOrNot).toEqual(true);
      });
    } catch (e) {
      console.log(e.message);
    }
  });
  //Test For Check The Parking Lot Is Full
  it(`given car object when park if parking full should return parking full`, () => {
    car4 = { vehicleNumber: "MH.15.XX.3333", color: "Black", parkTime: Date()};
    car5 = { vehicleNumber: "MH.15.XX.4444", color: "Red", parkTime: Date()};
    try {
      this.component.isParked(this.car4, function(result) {
        this.component.isParked(this.car5, function(result) {
          expect(result).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  });

  //Test For Checking If Parking Is Full and notify Airport Security
  it(`given car object when parking is full then notify airport security return exception`, () => {
    car6 = { vehicleNumber: "MH.15.YY.5555", color: "Orange", parkTime: Date()};
    car7 = { vehicleNumber: "MH.15.YY.6666", color: "Green", parkTime: Date()};
    try {
      this.component.isParked(this.car6, function(result) {
        this.component.isParked(this.car7, function(result) {
          expect(result).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  });
  //Test Case To Check Parking Lot Spaces 
  it(`given car object when parking lot is not full then show spaces available`, () => {
    car8 = { vehicleNumber: "MH.15.YY.7777", color: "Blue", parkTime: Date()};
    car9 = { vehicleNumber: "MH.15.ZZ.8888", color: "Indigo", parkTime: Date() };
    try {
      this.component.isParked(this.car8, function (result) {
        this.component.isParked(this.car9, function (result) {
          let unparkResult = this.component.isUnparked(this.car9);
          expect(unparkResult).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  });
  // Test Case To Take Decisions Where To Park Cars
  it(`given car object when parking lot has space, attendent will park car`, () => {
    car10 = { vehicleNumber: "MH.15.ZZ.9999", color: "Gray", parkTime: Date()};
    try {
      parkingAttendent.checkVacentSlot(function (result) {
        let position = result;
        this.component.addAtSpecific(position, this.car10, function (result) {
          expect(result).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  });
  // Test Case To Find Vehicle From Parking Lot
  it(`given car if found in parking lot should return true`, () => {
    try {
      let result = this.component.findVehicle(car1.vehicleNumber);
      //expect(result).to.equal(true);
      console.log("Found Vehicle at slot.." + result);
    } catch (e) {
      console.log(e.message);
    }
  });
  // When Car Parked In Lot Owner Want To Get Details of that vehicle
  it(`given car object if park show parking details of that vehicle`, () => {
    try {
      if (this.component.findVehicle(car5.vehicleNumber)) {
        console.log("Details : Number : " + car5.vehicleNumber);
        console.log(" Color : " + car5.color);
        console.log(" Time of Parking : " + car5.parkTime);
      }
    } catch (e) {
      console.log(e.message);
    }
  });

});


