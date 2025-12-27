import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="absolute inset-1/2 flex flex-col items-center justify-center">
            <TailSpin
            height={100}
            width={200}
            color="#f5385d"
            radius="1"
            visible={true}
        />
    </div>
    );
};

export default Spinner;

https://www.airbnb.co.in/book/stays/1576634678806794981?checkin=2026-01-16&checkout=2026-01-18&guestCurrency=INR&productId=1576634678806794981&isWorkTrip=false&numberOfAdults=1&numberOfChildren=0&numberOfGuests=1&numberOfInfants=0&numberOfPets=0&photoId=2441524232