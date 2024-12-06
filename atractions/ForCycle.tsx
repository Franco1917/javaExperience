import React, { useEffect, useState } from 'react';
import './ForCycle.css';
import Carousel3D from './animations/Carousel3D';

const ForCycle: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const [iterations, setIterations] = useState<number>(10);
    const [currentIteration, setCurrentIteration] = useState<number>(0);
    const [rotationY, setRotationY] = useState<number>(0);
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:8080/for-cycle');

        newSocket.onmessage = (event) => {
            const message = event.data;
            setLogs((prevLogs) => [...prevLogs, message]);

            if (message.startsWith("Iteración")) {
                const iterationNumber = parseInt(message.split(" ")[1], 10);
                setCurrentIteration(iterationNumber);

                // Calcula el nuevo ángulo de rotación
                const newRotation = (iterationNumber / iterations) * 2 * Math.PI;
                setRotationY(newRotation);
            }
        };

        newSocket.onerror = () => {
            console.error("Error en el WebSocket para el ciclo FOR");
        };

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, [iterations]);

    const startSimulation = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            setLogs([]); // Limpia la consola
            setCurrentIteration(0); // Reinicia la animación
            setRotationY(0); // Reinicia la rotación
            socket.send(iterations.toString());
        } else {
            setLogs((prevLogs) => [...prevLogs, "Conexión WebSocket no establecida."]);
        }
    };

    return (
        <div className="for-cycle-container">
            <h2>Simulación del Ciclo FOR</h2>
            <div className="controls">
                <label>
                    Número de iteraciones:
                    <input
                        type="number"
                        value={iterations}
                        onChange={(e) => setIterations(Number(e.target.value))}
                        min={1}
                        max={100}
                    />
                </label>
                <button onClick={startSimulation}>Iniciar Simulación</button>
            </div>
            <Carousel3D rotationY={rotationY} />
            <div className="console">
                {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                ))}
            </div>
        </div>
    );
};

export default ForCycle;
