// src/Logo3D.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Logo3D.css';

const Logo3D = () => {
  const mountRef = useRef();

  useEffect(() => {
    // Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.PointLight(0x00ffff, 2, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Load Logo Texture
    const texture = new THREE.TextureLoader().load('/logo.png');
    const geometry = new THREE.CircleGeometry(2, 64);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const logoMesh = new THREE.Mesh(geometry, material);
    logoMesh.rotation.x = Math.PI / 2;
    scene.add(logoMesh);

    // Add Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Handle Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      logoMesh.rotation.z += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', onResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="logo-container" />;
};

export default Logo3D;
