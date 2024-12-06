import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import CentralHub from './pages/centralHUb/CentralHub.tsx';
import ForCycle from "./atractions/ForCycle.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/hub" element={<CentralHub />} />
                <Route path="/for-cycle" element={<ForCycle />} />
            </Routes>
        </Router>
    );
};

export default App;