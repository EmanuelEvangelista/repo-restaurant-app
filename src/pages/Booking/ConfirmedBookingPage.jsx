import React from "react";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext";

const ConfirmedBookingPage = () => {
    const { bookingData } = React.useContext(RestaurantContext);

        if (!bookingData || !bookingData.date) {
        return <h2>No booking information available</h2>;
    }

    return (
        <div>
            <h2>Booking Confirmed!</h2>
            <p>Date: {bookingData.date}</p>
            <p>Time: {bookingData.time}</p>
            <p>Guests: {bookingData.guests}</p>
            <p>Occasion: {bookingData.occasion}</p>
        </div>
    );
};

export default ConfirmedBookingPage;