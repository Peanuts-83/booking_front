import { Component } from '@angular/core';
import { BaseList } from '../common/base-list/base-list'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.less']
})
export class BookingComponent extends BaseList {
  override title: string = 'Booking'

}
