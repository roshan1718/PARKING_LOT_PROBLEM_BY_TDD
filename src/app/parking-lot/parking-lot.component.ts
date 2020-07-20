import { Component, OnInit } from '@angular/core';
import { ParkingLotOwner } from './ParkingLotOwner';
@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.scss']
})
export class ParkingLotComponent implements OnInit {
  parking: any[];
  vehicle;
  color;
  parkingCapacity = 20;
  noOfVehicles = 1;

  constructor(public parkingOwner: ParkingLotOwner) {
    this.parking = [[this.vehicle, this.color]];
  }
  ngOnInit(): void { }

  isParked = (vehicle, callback) => {
    if (vehicle == null || vehicle === undefined) {
      throw new Error('Couldn\'t Park..Invalid Vehicle..');
    }
    else {
      // If Parking is not full then it will add vehicle
      if (this.parkingOwner.checkParkingFull(this.noOfVehicles, this.parkingCapacity)) {
        this.parking[this.noOfVehicles] = vehicle;
        this.noOfVehicles++;
        callback(true);
      }
    }
  }
  // Method To Remove Vehicle To Parking
  isUnparked(vehicle) {
    if (vehicle == null || vehicle === undefined) {
      throw new Error('Couldn\'t Unpark Car..Invalid Vehicle..');
    } else {
      for (let index = 0; index < this.parkingCapacity; index++) {
        if (this.parking[index] === vehicle) {
          delete this.parking[index];
          this.parkingOwner.checkSpaceAvailable(index);
          return true;
        }
      }
    }
  }

  // Method TO Check Empty Slot
  emptySlots() {
    for (let index = 0; index < this.parkingCapacity; index++) {
      if (this.parking[index] === ','){
        return index;
      }
      else{
        throw new Error("No Slot is Empty");
      }
    }
  }
  // Method To Add Vehicle At Specific Slot
  addAtSpecific(index, vehicle, callback) {
    this.parking[index] = vehicle;
    callback(true);
  }

}
