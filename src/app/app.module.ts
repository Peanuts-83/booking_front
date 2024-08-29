import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { TableComponent } from './components/common/table/table.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { GuestsComponent } from './components/guests/guests.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    NavbarComponent,
    TableComponent,
    RoomsComponent,
    InvoicesComponent,
    GuestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
