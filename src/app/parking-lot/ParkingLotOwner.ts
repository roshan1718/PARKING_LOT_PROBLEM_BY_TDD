import { Injector, Injectable } from '@angular/core';
import { AirportSecurity } from './AirportSecurity';

const parkingCapacity = 2;
@Injectable( {providedIn: 'root'})
export class ParkingLotOwner {
    constructor(public airportSecurity: AirportSecurity ){}
     // Method To Check if Parking Capacity os Reached
     checkParkingFull(parkedVehicles, parkingCapacity)
     {
         if (parkedVehicles === parkingCapacity)
         {
             this.airportSecurity.sendNotification(false);
             return false;
         }
         else{
            return true;
         }
     }
     // Method To Check Vacent Space is Available
     checkSpaceAvailable(slotNumber){
         throw new Error("Unparked Vehicle.., vacent space is at slot Number :"+slotNumber);
     }
}


