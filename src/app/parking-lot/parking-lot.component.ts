import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.scss']
})
export class ParkingLotComponent implements OnInit {
  parking: any[];
  constructor() {
    this.parking = [];
  }

  ngOnInit(): void {
  }

  isParked(vehicle) {
    if (vehicle == null || vehicle === undefined) {
      throw new Error('Could not Park..Invalid Vehicle..');
    }
    else {
      this.parking.push(vehicle);
      return true;
    }
  }
  //Method To Remove Vehicle To Parking
  isUnparked(vehicle) {
    if (vehicle == null || vehicle === undefined){
      throw new Error('Could not Unpark Car..Invalid Vehicle..');
    }
    else
      if (this.parking.includes(vehicle)) {
        this.parking.pop();
        return true;
      }
  }

}
