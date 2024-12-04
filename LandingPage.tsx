import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>The Java Experience</h1>
                <p>Explora el mundo de Java como nunca antes lo habías imaginado.</p>
                <button
                    className="landing-button"
                    onClick={() => window.location.href = '/hub'}
                >
                    ¡Entra al parque!
                </button>
            </header>
        </div>
    );
};

export default LandingPage;
