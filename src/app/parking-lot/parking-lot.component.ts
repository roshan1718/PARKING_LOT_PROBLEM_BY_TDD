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
  parkingCapacity = 20;
  noOfVehicles = 1;
  index = [];

  constructor(public parkingOwner: ParkingLotOwner) {
    this.parking = [[], [], [], []];
  }
  ngOnInit(): void {
  }

  isParked = (vehicle, callback) => {
    if (vehicle == null || vehicle === undefined) {
      throw new Error('Could not Park..Invalid Vehicle..');
    }
    else {
      // If Parking is not full then it will add vehicle
      if (this.parkingOwner.checkParkingFull(this.noOfVehicles, this.parkingCapacity)) {
          if (vehicle.driverType === 'Handicap') {
            this.index = this.findNearestSlot(undefined);
          }else
            this.index = this.checkForParkingSlot(undefined);
          this.parking[this.index[0]][this.index[1]] = vehicle;
          this.noOfVehicles++;
          callback(true);
      }
    }
  }
  // Method To Remove Vehicle To Parking
  isUnparked(vehicle) {
    if (vehicle == null || vehicle === undefined) {
      throw new Error('Could not Unpark Car..Invalid Vehicle..');
    } else {
      this.index = this.checkForParkingSlot(vehicle);
      delete this.parking[this.index[0]][this.index[1]];
      this.noOfVehicles--;
      this.parkingOwner.checkSpaceAvailable(vehicle);
      return true;
    }
  }


  // Method TO Check Empty Slot
  emptySlots() {
    this.index = this.checkForParkingSlot(undefined);
    return this.index;
  }
  // Method To Add Vehicle At Specific Slot

  addAtSpecific(index, vehicle, callback) {
    this.parking[index[0]][index[1]] = vehicle;
    this.noOfVehicles++;
    callback(true);
  }
  // Method For Finding Vehicle In Parking Lot
  findVehicle(vehicle) {
    this.index = this.checkForParkingSlot(vehicle);
    if (this.parking[this.index[0]][this.index[1]] == vehicle)
    return true;
          else
              throw new Error("This vehicle is not park here, check credentials again");
      }
//Method To Check Nearest Slot in Parking
findNearestSlot(vehicle)
{
  for (let rowIndex = 0; rowIndex < (this.parkingCapacity / 2); rowIndex++) {
    for (let columnIndex = 0; columnIndex < this.parkingCapacity; columnIndex++) {
      if (this.parking[rowIndex][columnIndex] === this.vehicle) {
        var arr = [rowIndex, columnIndex];
        return arr;
      }
    }
  }
  this.checkForParkingSlot(this.vehicle);
  throw new Error("Couldn't Find Nearest Slot Adding At Available Slot")
}
// Method To Check Availability of Input Vehicle
checkForParkingSlot(vehicle){
  for (let rowIndex = 0; rowIndex < this.parking.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < this.parking.length; columnIndex++) {
      if (this.parking[rowIndex][columnIndex] === this.vehicle) {
        var arr = [rowIndex, columnIndex];
        return arr;
      }
    }
  }
  throw new Error("Couldn't Add, Remove or Found Specific Vehicle")
}

}
