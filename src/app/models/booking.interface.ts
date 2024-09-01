export interface BookingList {
  id: number
  guest_id: string
  check_in_date: Date
  check_out_date: Date
  num_guests: number
  is_checked_in: boolean
  room_id: number
  invoice_id: number
}
