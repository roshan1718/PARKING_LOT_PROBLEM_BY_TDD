import { Injector, Injectable } from '@angular/core';
const parkingCapacity = 2;
@Injectable( {providedIn: 'root'})
export class ParkingLotOwner {
     // Method To Check if Parking Capacity os Reached
     checkParkingFull(parking, callback){
        if (parking.length === parkingCapacity){
            // Parking Full Notification on console
            console.log('Hey Sanjay..Parking Is Full Could not park more Vehicle');
            callback(false);
        }
        else{
            callback(true);
        }
    }
}


