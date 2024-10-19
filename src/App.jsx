import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ResourceList from './components/ResourceList';
import Labs from './pages/Labs';
import SeminarHall from './pages/SeminarHall';
import Auditorium from './pages/Auditorium';
import Classrooms from './pages/Classrooms';
import BookingForm from './components/BookingForm';
import SuccessMessage from './components/SuccessMessage';

function App() {
    const resources = [
        { id: 1, name: 'LABS', path: '/labs' },
        { id: 2, name: 'SEMINAR HALL', path: '/seminar-hall' },
        { id: 3, name: 'AUDITORIUM', path: '/auditorium' },
        { id: 4, name: 'CLASSROOM', path: '/classrooms' }
    ];

    // Define the onSubmit function here/
    const handleBookingSubmit = (bookingDetails) => {
        console.log("Booking Details:", bookingDetails);
    };

    return (

        <Router>
            <div className="App">

                <Navbar title="RESOURCE BOOKING" profileName="Midhunraja V A"/>

                <Routes>
                    <Route path="/" element={<ResourceList resources={resources} />} />
                    
                    <Route path="/labs" element={<Labs />} />
                    <Route path="/seminar-hall" element={<SeminarHall />} />
                    <Route path="/auditorium" element={<Auditorium />} />
                    <Route path="/classrooms" element={<Classrooms />} />

                    <Route path="/booking-form" element={<BookingForm onSubmit={handleBookingSubmit} />} /> 
                    <Route path="/success-message" element={<SuccessMessage />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

            </div>
            
        </Router>
    );
}

export default App;
