import React from 'react';
import './CentralHub.css';

const CentralHub: React.FC = () => {
    const handleAttractionClick = (attraction: string) => {
        alert(`¡Explorando la atracción: ${attraction}!`);

    };

    return (
        <div className="central-container">
            <header className="central-header">
                <h1>The Java Experience</h1>
                <nav className="central-menu">
                    <a href="/">Inicio</a>
                    <a href="/about">Sobre el proyecto</a>
                    <a href="/contact">Contacto</a>
                </nav>
            </header>
            <main className="central-map">
                <h2>Selecciona una atracción:</h2>
                <div className="map-area">
                    {/* Fondo del mapa */}
                    <img src="/src/assets/park2.png" alt="Mapa del Parque" className="map-background" />

                    {/* Puntos interactivos sobre el mapa */}
                    <button
                        className="map-point"
                        style={{ top: '20%', left: '30%' }}
                        onClick={() => handleAttractionClick('Ciclo For')}
                    >
                        Ciclo For
                    </button>
                    <button
                        className="map-point"
                        style={{ top: '40%', left: '50%' }}
                        onClick={() => handleAttractionClick('Ciclo While')}
                    >
                        Ciclo While
                    </button>
                    <button
                        className="map-point"
                        style={{ top: '60%', left: '70%' }}
                        onClick={() => handleAttractionClick('Clases y Objetos')}
                    >
                        Clases y Objetos
                    </button>
                </div>
            </main>
            <footer className="central-footer">
                <p>© 2024 The Java Experience - Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default CentralHub;
