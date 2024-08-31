import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BookingComponent } from './components/booking/booking.component'
import { GuestsComponent } from './components/guests/guests.component'
import { InvoicesComponent } from './components/invoices/invoices.component'

const routes: Routes = [
  { path: '', redirectTo: '/booking', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent },
  { path: 'guests', component: GuestsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'rooms', component: GuestsComponent },
  { path: '**', redirectTo: '/booking'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
