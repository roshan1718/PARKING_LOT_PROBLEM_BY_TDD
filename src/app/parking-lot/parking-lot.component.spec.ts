import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotComponent } from './parking-lot.component';

describe('ParkingLotComponent', () => {
  let component: ParkingLotComponent;
  let fixture: ComponentFixture<ParkingLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`given car object when car is parked should return true`, () =>
  {
      let car = {};
      let carParkedOrNot= component.isParked(car);
      expect(carParkedOrNot).toEqual(true);
  });

  it(`given car object when invalid and car is not parked should return exception`, () =>
  {
      try{
           let carParkedOrNot = component.isParked(null);
           expect(carParkedOrNot).toBeFalsy();
          }catch (e){
          console.log(e.message);
      }
  });

});
