export interface BookingList {
  booking_id: number
  ref_guest_id: string
  check_in_date: Date
  check_out_date: Date
  num_guests: number
  is_checked_in: boolean
  ref_room_id: number
  ref_invoice_id: number
}
