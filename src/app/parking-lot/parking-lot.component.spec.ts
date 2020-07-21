import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ParkingLotComponent } from './parking-lot.component';
import { ParkingAttendant } from './ParkingAttendant';
import { Cars } from './Cars';
describe('ParkingLotComponent', () => {
  let component: ParkingLotComponent;
  let parkingAttendent: ParkingAttendant;
  let cars: Cars;
  let fixture: ComponentFixture<ParkingLotComponent>;
  let parking;

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
    try {
      component.isParked(cars.car0, function (result) {
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
    try {
      this.component.isParked(cars.car1, function (result) {
        const carParkedOrNot = this.component.isUnparked(cars.car1);
        expect(carParkedOrNot).toEqual(true);
      });
    } catch (e) {
      console.log(e.message, "Unparked..[object Object]");
    }
  });

  // Test For Possiblities To Remove Vehicle from Parking Lot
  it(`given car object when invalid or car can't unparked should return exception`, () => {
    try {
      this.component.isParked(cars.car2, function (result) {
        const carParkedOrNot = this.component.isUnparked(undefined);
        expect(carParkedOrNot).toEqual(true);
      });
    } catch (e) {
      console.log(e.message);
    }
  });

  // Test For Check The Parking Lot Is Full if Full Notify Owner and Airport
  it(`given car object when park if parking full should return parking full`, () => {
    try{
      this.component.isParked(this.cars.car1,function(result){
        this.component.isParked(this.cars.car2,function(result){
          this.component.isParked(this.cars.car3,function(result){
                  expect(result).toEqual(true);
              });
          });
      });
  }catch(e){
      console.log(e.message);
  }
  });

  //Test Case To Check Parking Lot Spaces 
  it(`given car object when parking lot is not full then show spaces available`, () => {
    try{
      this.component.isParked(this.cars.car8, function(result){
        this.component.isParked(this.cars.car9, function(result){
          let unparkResult = this.component.isUnparked(this.cars.car9);
          expect(unparkResult).toEqual(true);
        });
      });
    }catch (e){
      console.log(e.message);
  }
  });
  // Test Case To Take Decisions Where To Park Cars
  it(`given car object when parking lot has space, attendent will park car`, () => {
    try {
      parkingAttendent.checkVacentSlot(function(result) {
        let position = result;
        this.component.addAtSpecific(position, cars.car9, function(result) {
          expect(result).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message, "Couldn't Add, Remove or Found Specific Vehicle");
    }
  });
  // Test Case To Find Vehicle From Parking Lot
  it(`given car if found in parking lot should return true`, () => {
    try {
      let result = this.component.findVehicle(cars.car3.vehicleNumber);
      expect(result).toEqual(true);
      console.log("Found Vehicle at slot.." + result);
    } catch (e) {
      console.log(e.message, "This vehicle is not park here, check credentials again");
    }
  });
  // When Car Parked In Lot Owner Want To Get Details of that vehicle
  it(`given car object if park show parking details of that vehicle`, () => {
    try {
      let returnResult = this.component.findVehicle(cars.car4);
      expect(this.returnResult).toEqual(true);

    } catch (e) {
      console.log(e.message, "This vehicle is not park here, check credentials again");
    }
  });
  // Test Case To Find Nearest Slot In Parking To Park Car of Handicap Driver
  it(`given car of handicap driver when parking lot has space, attendent will park car at nearest slot`, () => {
    try {
      parkingAttendent.checkNearestSlot(function(returnResult) {
        this.component.addAtSpecific(returnResult, cars.car10, function(returnResult) {
          expect(returnResult).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message, "Couldn't Add, Remove or Found Specific Vehicle");
    }
  });

});


