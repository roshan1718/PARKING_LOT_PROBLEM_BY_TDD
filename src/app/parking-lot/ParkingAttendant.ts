// Parking Attendant Class To Check Vacent Space

import {ParkingLotComponent} from './parking-lot.component';

export class ParkingAttendant
{
    constructor(public parkingObject: ParkingLotComponent){}
    // Method To Find Vacent Slot In Parking Lot
    checkVacentSlot(callback)
    {
        let indexReceived = this.parkingObject.emptySlots();
        callback(indexReceived);
    }

     // Method To Find Nearest Parking Slot Available
     checkNearestSlot(callback)
     {
         let nearestSlot = this.parkingObject.findNearestSlot(undefined);
         callback(nearestSlot);
     }
}
