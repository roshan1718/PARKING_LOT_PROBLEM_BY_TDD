import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { ParkingLotOwner } from './parking-lot/ParkingLotOwner';

@NgModule({
  declarations: [
    AppComponent,
    ParkingLotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
