import React from 'react';
import moment from 'moment';

function BookingHistoryList({ bookingHistory }) {
  console.log("Booking History List Component:", bookingHistory);
  return (
    <div>
      {bookingHistory.length > 0 ? (
        bookingHistory.map((booking, index) => (
          <div key={index}>
            <h3>{booking.businessList?.name}</h3>
            
            {booking.businessList?.images?.map((image, imgIndex) => (
              <img key={imgIndex} src={image.url} alt="business" />
            ))}
          </div>
        ))
      ) : (
        <p>No bookings available</p>
      )}
    </div>
  );
}

export default BookingHistoryList;
