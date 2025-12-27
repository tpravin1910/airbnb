import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks';
import axiosInstance from '@/utils/axios';
import DatePickerWithRange from './DatePickerWithRange';

const BookingWidget = ({ place }) => {
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [bookingData, setBookingData] = useState({
    noOfGuests: 1,
    name: '',
    phone: '',
  });
  const [redirect, setRedirect] = useState('');
  const { user } = useAuth();

  const { noOfGuests, name, phone } = bookingData;
  const { _id: id, price } = place;

  useEffect(() => {
    if (user) {
      setBookingData({ ...bookingData, name: user.name });
    }
  }, [user]);

  const numberOfNights =
    dateRange.from && dateRange.to
      ? differenceInDays(
          new Date(dateRange.to).setHours(0, 0, 0, 0),
          new Date(dateRange.from).setHours(0, 0, 0, 0)
        )
      : 0;

  // handle booking form
  const handleBookingData = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async () => {
    // User must be signed in to book place
    if (!user) {
      return setRedirect(`/login`);
    }

    // BOOKING DATA VALIDATION
    if (numberOfNights < 1) {
      return toast.error('Please select valid dates');
    } else if (noOfGuests < 1) {
      return toast.error("No. of guests can't be less than 1");
    } else if (noOfGuests > place.maxGuests) {
      return toast.error(`Allowed max. no. of guests: ${place.maxGuests}`);
    } else if (name.trim() === '') {
      return toast.error("Name can't be empty");
    } else if (phone.trim() === '') {
      return toast.error("Phone can't be empty");
    }

    try {
        const response = await axiosInstance.post('/bookings', {
            checkIn: dateRange.from,
            checkOut: dateRange.to,
            noOfGuests,
            name,
        phone,
        place: id,
        price: numberOfNights * price,
      });

      const bookingId = response.data._id;
      toast.success('Booking successful!');
      setRedirect(`/account/bookings/${bookingId}`);
    } catch (error) {
      toast.error('Booking failed. Please try again.');
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check in & Out:</label>
            <DatePickerWithRange setDateRange={setDateRange} dateRange={dateRange} />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input
            type="number"
            name="noOfGuests"
            value={noOfGuests}
            onChange={handleBookingData}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleBookingData}
              placeholder="John Doe"
            />
            <label>Phone number:</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleBookingData}
              placeholder="xxx-xxxxxxx"
            />
          </div>
        )}
      </div>
      <button onClick={handleBooking} className="primary mt-4">
        Book this place
        {numberOfNights > 0 && (
          <span> ${numberOfNights * price}</span>
        )}
      </button>
    </div>
  );
};

export default BookingWidget;