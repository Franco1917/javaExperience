import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const dataTypes = [
    {
        name: 'int',
        description: 'El tipo de dato entero. Representa números enteros.',
        operations: 'Suma, resta, multiplicación, división.',
        example: 'int numero = 5;',
    },
    {
        name: 'String',
        description: 'Representa secuencias de caracteres.',
        operations: 'Concatenación, longitud, acceso a caracteres.',
        example: 'String saludo = "Hola Mundo";',
    },
    {
        name: 'boolean',
        description: 'Representa valores de verdadero o falso.',
        operations: 'Operadores lógicos (AND, OR, NOT).',
        example: 'boolean esJava = true;',
    },
    {
        name: 'double',
        description: 'Tipo de dato para números decimales.',
        operations: 'Suma, resta, multiplicación, división, comparación.',
        example: 'double precio = 19.99;',
    },
    {
        name: 'char',
        description: 'Representa un solo carácter.',
        operations: 'Comparación, conversión a valores numéricos.',
        example: 'char letra = "A";',
    }
];

const LandingPage: React.FC = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [showButton, setShowButton] = useState(true);  // Mostrar el botón al inicio
    const [showDataTypes, setShowDataTypes] = useState(true); // Mostrar la sección de tipos de datos desde el inicio
    const [showConsoleMessages, setShowConsoleMessages] = useState(false); // Controlar los mensajes de consola
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

    const startSimulation = () => {
        setShowButton(false); // Ocultar el botón
        setShowDataTypes(false); // Ocultar la sección de personajes una vez que el usuario inicie la simulación
        setShowConsoleMessages(true); // Comienza a mostrar los mensajes de la consola
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < messages.length && showConsoleMessages) {
                setCurrentMessage((prev) => prev + '\n' + messages[index]);
                index++;
            } else if (index === messages.length) {
                clearInterval(interval);
                setTimeout(() => {
                    window.location.href = '/hub'; // Redirige al centralHub después de mostrar todos los mensajes
                }, 1000); // Retraso de 1 segundo antes de la redirección
            }
        }, 1500); // Mostrar mensaje cada 1.5 segundos

        return () => clearInterval(interval);
    }, [showConsoleMessages]);

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

                    {/* Sección de los tipos de datos en Java (Personajes) */}
                    {showDataTypes && (
                        <div className="data-types-section">
                            <h2>Conoce a los Personajes: Tipos de Datos en Java</h2>
                            <div className="data-types-list">
                                {dataTypes.map((dataType, index) => (
                                    <div key={index} className="data-type-card">
                                        <h3>{dataType.name}</h3>
                                        <p>{dataType.description}</p>
                                        <p><strong>Operaciones comunes:</strong> {dataType.operations}</p>
                                        <p><strong>Ejemplo:</strong> {dataType.example}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="console">
                        <pre>{currentMessage}</pre>
                    </div>

                    {/* Mostrar el botón solo antes de que comience la simulación */}
                    {showButton && (
                        <button
                            className="enter-button"
                            onClick={startSimulation}
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
