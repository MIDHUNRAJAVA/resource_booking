// src/pages/Classrooms.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Classrooms.css';

const classroomsData = [
    {
        department: "ECE",
        classrooms: ["EC100", "EC102", "EC104", "EC106"]
    },
    {
        department: "EEE",
        classrooms: ["EE100", "EE102", "EE104", "EE106"]
    },
    {
        department: "ISE",
        classrooms: ["ISE100", "EE102", "EE104", "EE106"]
    }
  
   
    
];

const Classrooms = () => {
    const navigate = useNavigate();
    const [selectedClassrooms, setSelectedClassrooms] = useState([]);

    const handleClassroomClick = (classroom) => {
        setSelectedClassrooms(prevSelected =>
            prevSelected.includes(classroom)
                ? prevSelected.filter(item => item !== classroom)
                : [...prevSelected, classroom]
        );
    };

    const handleBulkBooking = () => {
        navigate('/booking-form', { state: { selectedClassrooms } });
    };

    return (
        <div className="classrooms-container">
            {classroomsData.map((dept, index) => (
                <div key={index} className="department-section">
                    <h2 className="department-title">{dept.department}</h2>
                    <div className="classrooms-list">
                        {dept.classrooms.map((classroom, idx) => (
                            <div
                                key={idx}
                                className={`classroom-item ${selectedClassrooms.includes(classroom) ? 'selected' : ''}`}
                                onClick={() => handleClassroomClick(classroom)}
                            >
                                {classroom}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <button onClick={handleBulkBooking} disabled={selectedClassrooms.length === 0}>
                Book Selected Classrooms
            </button>

        </div>
    );
};

export default Classrooms;
