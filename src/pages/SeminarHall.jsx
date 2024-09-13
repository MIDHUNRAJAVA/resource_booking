// src/pages/SeminarHall.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeminarHall.css';

const seminarHalls = [
    "EEE",
    "TEXTILE",
    "SF-1",
    "SF-2",
    "SF-3",
    "BIO-TECH",
    "OLD-MECH",
];

const SeminarHall = () => {
    const navigate = useNavigate();
    const [selectedSeminarHalls, setSelectedSeminarHalls] = useState([]);

    const handleSeminarHallClick = (hall) => {
        setSelectedSeminarHalls(prevSelected =>
            prevSelected.includes(hall)  
                ? prevSelected.filter(item => item !== hall)
                : [...prevSelected, hall]
        );
    };

    const handleBulkBooking = () => {
        navigate('/booking-form', { state: { selectedSeminarHalls } });
    };

    return (
        <div className="seminarhall-container">

            <div className="seminarhall-list">
                {seminarHalls.map((hall, index) => (
                    <div
                        key={index}
                        className={`seminarhall-item ${selectedSeminarHalls.includes(hall) ? 'selected' : ''}`}
                        onClick={() => handleSeminarHallClick(hall)}
                    >
                        {hall}
                    </div>
                ))}
            </div>

            <button onClick={handleBulkBooking} disabled={selectedSeminarHalls.length === 0}>
                Book Selected Seminar Halls
            </button>

        </div>
    );
};

export default SeminarHall;
