import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = ({ onSubmit }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const { selectedLabs, selectedSeminarHalls, selectedAuditoriums, selectedClassrooms } = location.state || {};

    const [date, setDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingDetails = {
            date,
            fromTime,
            toTime,
            reason,
            resources: [...(selectedLabs || []), ...(selectedSeminarHalls || []), ...(selectedAuditoriums || []), ...(selectedClassrooms || [])]
        };
        onSubmit(bookingDetails); // This should call the function passed via props
        navigate('/success-message'); // Navigate to success message
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>

            <label>
                Select Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>

            <label>
                From Time:
                <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
            </label>

            <label>
                To Time:
                <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} />
            </label>

            <label>
                Reason:
                <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Enter your reason for booking here" />
            </label>

            <button type="submit">Submit</button>
            
        </form>
    );
};

export default BookingForm;
