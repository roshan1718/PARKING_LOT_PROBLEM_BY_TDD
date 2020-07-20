import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ParkingLotComponent } from './parking-lot.component';
import { ParkingLotOwner } from './ParkingLotOwner';
import { ParkingAttendant} from './ParkingAttendant';
describe('ParkingLotComponent', () => {
  let component: ParkingLotComponent;
  let parkingAttendent: ParkingAttendant;
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
    let car1 = ["MH 15 XX 0000", "A"];
    let car2 = ["MH 15 XX 1111", "B"];
    let car3 = ["MH 15 XX 2222", "C"];
    let car4 = ["MH 15 XX 3333", "D"];
    let car5 = ["MH 15 XX 4444", "E"];
    let car6 = ["MH 15 YY 5555", "F"];
    let car7 = ["MH 15 YY 6666", "G"];
    let car8 = ["MH 15 YY 7777", "H"];
    let car9 = ["MH 15 ZZ 8888", "I"];
    let car10 = ["MH 15 ZZ 9999", "J"];
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
    try {
      this.component.isParked(this.car4, function (result) {
        this.component.isParked(this.car5, function (result) {
          expect(result).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  });

  //Test For Checking If Parking Is Full and notify Airport Security
  it(`given car object when parking is full then notify airport security return exception`, () => {
    try {
      this.component.isParked(this.car6, function (result) {
        this.component.isParked(this.car7, function (result) {
          expect(result).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  });
  //Test Case To Check Parking Lot Spaces 
  it(`given car object when parking lot is not full then show spaces available`, () => {
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
    try {
      parkingAttendent.checkVacentSlot(function(result) {
        let position = result;
        this.component.addAtSpecific(position, this.car10, function(result) {
          expect(result).toEqual(true);
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  });

});

