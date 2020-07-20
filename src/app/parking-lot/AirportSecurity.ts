import { Injectable } from '@angular/core';

// Airport Security Class To Send Notification To Airport If Parking is Full
@Injectable( {providedIn: 'root'})
export class AirportSecurity {
    // Method To Send Notifation TO Airport When Parking Is Full
    sendNotification = function(result) {
        if (result === false){
            throw new Error("Notification From Parking Lot : Parking Is Full..!");
        }
    };
}
