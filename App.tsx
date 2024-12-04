import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import CentralHub from './pages/centralHUb/CentralHub.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/hub" element={<CentralHub />} />
            </Routes>
        </Router>
    );
};

export default App;