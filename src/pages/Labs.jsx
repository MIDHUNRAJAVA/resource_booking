// // src/pages/Labs.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Labs.css';  // Import the Labs-specific styles

// const labsData = [
//     {
//         department: "CSE - LAB",
//         labs: ["CSE LAB - 01", "CSE LAB - 02", "CSE LAB - 03"]
//     },
//     {
//         department: "IT - LABS",
//         labs: ["IT LAB - 01", "IT LAB - 02", "IT LAB - 03"]
//     }
// ];

// const Labs = () => {
//     const navigate = useNavigate();

//     const handleLabClick = (lab) => {
//         // Navigate to the booking form, possibly passing the lab name as a parameter
//         navigate('/booking-form', { state: { labName: lab } });
//     };

//     return (
//         <div className="labs-container">
//             {labsData.map((dept, index) => (
//                 <div key={index} className="department-section">
//                     <h2 className="department-title">{dept.department}</h2>
//                     <div className="labs-list">
//                         {dept.labs.map((lab, idx) => (
//                             <div
//                                 key={idx}
//                                 className="lab-item"
//                                 onClick={() => handleLabClick(lab)}
//                             >
//                                 {lab}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Labs;


// src/pages/Labs.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Labs.css';

const labsData = [
    {
        department: "CSE - LAB",
        labs: ["CSE LAB - 01", "CSE LAB - 02", "CSE LAB - 03"]
    },
    {
        department: "IT - LABS",
        labs: ["IT LAB - 01", "IT LAB - 02", "IT LAB - 03"]
    }
];

const Labs = () => {
    const navigate = useNavigate();
    const [selectedLabs, setSelectedLabs] = useState([]);

    const handleLabClick = (lab) => {
        setSelectedLabs(prevSelected => 
            prevSelected.includes(lab)
                ? prevSelected.filter(item => item !== lab) // Unselect if already selected
                : [...prevSelected, lab] // Select if not already selected
        );
    };

    const handleBulkBooking = () => {
        navigate('/booking-form', { state: { selectedLabs } });
    };

    return (
        <div className="labs-container">
            {labsData.map((dept, index) => (
                <div key={index} className="department-section">
                    <h2 className="department-title">{dept.department}</h2>
                    <div className="labs-list">
                        {dept.labs.map((lab, idx) => (
                            <div
                                key={idx}
                                className={`lab-item ${selectedLabs.includes(lab) ? 'selected' : ''}`}
                                onClick={() => handleLabClick(lab)}
                            >
                                {lab}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button onClick={handleBulkBooking} disabled={selectedLabs.length === 0}>
                Book Selected Labs
            </button>
        </div>
    );
};

export default Labs;
