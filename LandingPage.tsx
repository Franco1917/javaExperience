import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [showButton, setShowButton] = useState(false);
    const messages = [
        "// Iniciando la JVM (Java Virtual Machine)...",
        "Cargando el programa...",
        "// Buscando el método main...",
        "public static void main(String[] args) {...}",
        "// Método 'main' invocado por la JVM",
        "Inicializando componentes esenciales...",
        "Instanciando clases y objetos...",
        "Cargando clases desde el ClassLoader...",
        "Estableciendo el entorno de ejecución...",
        "¡Parque preparado! Bienvenido a The Java Experience."
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < messages.length) {
                setCurrentMessage((prev) => prev + '\n' + messages[index]);
                index++;
            } else {
                clearInterval(interval);
                setShowButton(true);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>The Java Experience</h1>
                <nav className="landing-menu">
                    <a href="/">Inicio</a>
                    <a href="/about">Sobre el proyecto</a>
                    <a href="/contact">Contacto</a>
                </nav>
            </header>
            <main className="landing-content">
                <div className="ticket-booth">
                    <h2>Boletería Virtual</h2>
                    <div className="console">
                        <pre>{currentMessage}</pre>
                    </div>
                    {showButton && (
                        <button
                            className="enter-button"
                            onClick={() => (window.location.href ='/hub')}
                        >
                            Entrar al Parque
                        </button>
                    )}
                </div>
            </main>
            <footer className="landing-footer">
                <p>© 2024 The Java Experience - Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
