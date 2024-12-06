import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

interface Carousel3DProps {
    rotationY: number;
}

const Carousel3D: React.FC<Carousel3DProps> = ({ rotationY }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<THREE.Group | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 5, 5);
        camera.lookAt(0, 0, 0);


        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);


        const carousel = new THREE.Group();
        carouselRef.current = carousel;

        for (let i = 0; i < 8; i++) {
            const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const box = new THREE.Mesh(boxGeometry, material);
            box.position.set(
                Math.cos((i / 8) * 2 * Math.PI) * 2,
                0,
                Math.sin((i / 8) * 2 * Math.PI) * 2
            );
            carousel.add(box);
        }
        scene.add(carousel);


        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            renderer.dispose();
            scene.clear();
            container.removeChild(renderer.domElement);
        };
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            gsap.to(carouselRef.current.rotation, {
                y: rotationY,
                duration: 0.5,
                ease: "power1.out",
            });
        }
    }, [rotationY]);

    return <div ref={containerRef} style={{ width: "100%", height: "400px" }} />;
};

export default Carousel3D;
