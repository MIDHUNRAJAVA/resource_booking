// src/pages/Auditorium.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auditorium.css';

const AuditoriumData = [
    "MAIN AUDITORIUM",
    "VEDHANAYAGAM AUDITORIUM"
];

const Auditorium = () => {
    const navigate = useNavigate();
    const [selectedAuditoriums, setSelectedAuditoriums] = useState([]);

    const handleAuditoriumClick = (hall) => {
        setSelectedAuditoriums(prevSelected =>
            prevSelected.includes(hall)
                ? prevSelected.filter(item => item !== hall)
                : [...prevSelected, hall]
        );
    };

    const handleBulkBooking = () => {
        navigate('/booking-form', { state: { selectedAuditoriums } });
    };

    return (
        <div className="auditorium-container">
            <div className="auditorium-list">
                {AuditoriumData.map((hall, index) => (
                    <div
                        key={index}
                        className={`auditorium-item ${selectedAuditoriums.includes(hall) ? 'selected' : ''}`}
                        onClick={() => handleAuditoriumClick(hall)}
                    >
                        {hall}
                    </div>
                ))}
            </div>
            <button onClick={handleBulkBooking} disabled={selectedAuditoriums.length === 0}>
                Book Selected Auditoriums
            </button>
        </div>
    );
};

export default Auditorium;
