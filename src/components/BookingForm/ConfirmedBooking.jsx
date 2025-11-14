import React, { useContext, useEffect } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext";
import Alert from 'react-bootstrap/Alert';
import ConfirmedBookingPage from "../../pages/Booking/ConfirmedBookingPage.jsx";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
    const { bookingData, isSubmitted } = useContext(RestaurantContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isSubmitted === true) {
            console.log("Reserva exitosa", bookingData);
            navigate("/confirmed-booking"); 
        }
    }, [isSubmitted, bookingData, navigate]);

    if (isSubmitted === '') return null;

    return (
        <>
            {isSubmitted ? (
                <div>
                    {/* Redireccionando... */}
                </div>
            ) : (
                <Alert variant="danger">
                    Lo sentimos, no se pudo realizar la reserva.
                </Alert>
            )}
        </>
    );
}

export default ConfirmedBooking;
