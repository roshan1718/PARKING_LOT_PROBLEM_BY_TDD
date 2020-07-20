import { Component, OnInit } from '@angular/core';
import { ParkingLotOwner} from './ParkingLotOwner';
@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.scss']
})
export class ParkingLotComponent implements OnInit {
  parking: any[];
  constructor( public parkingOwner: ParkingLotOwner) {
  }
  ngOnInit(): void {
  }

  isParked = (parking, vehicle, callback) => {
    if ( vehicle == null || vehicle === undefined){
        throw new Error("Couldn't Park..Invalid Vehicle..")
    }
    else {
        // If Parking is not full then it will add vehicle
        this.parkingOwner.checkParkingFull(parking, function(result){
        if (result === true){
            parking.push(vehicle);
            callback(result);
        }
        });
    }
}
  //Method To Remove Vehicle To Parking
  isUnparked(vehicle) {
      if ( vehicle == null || vehicle === undefined){
          throw new Error("Couldn't Unpark Car..Invalid Vehicle..");
      }else {
        return true;
      }
  }
}
