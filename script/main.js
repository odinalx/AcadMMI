import * as THREE from 'three';

function init() {
    // Define global variables
    let scene, camera;

    // Set up Three.js scene
    scene = new THREE.Scene();

    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(4.5, 4.5, 6.5); // Position the camera at (0,0,10)
    camera.lookAt(0, 0, 0);

    // Set up the renderer and configure settings
    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.zIndex = '-1';
    renderer.domElement.style.left = '-8%';
    renderer.domElement.style.top = '-25%';
    renderer.domElement.style.width = '150%';
    renderer.domElement.style.height = 'auto';
    document.body.appendChild(renderer.domElement);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    scene.scale.normalize().multiplyScalar(1);

    // Create the ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 10); // Parameters: color, intensity
    scene.add(ambientLight);    

    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
        // Update camera aspect ratio and renderer size on window resize
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Create the spotlight with shadows
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 20, 30);
    spotLight.castShadow = true;
    scene.add(spotLight);

    const particleCount = 1000;
    let sphereRadius = 1;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);


    const spherePointsGeometry = new THREE.BufferGeometry();
const numberOfParticles = 1000; // Définit le nombre de points (particules)
const positionsArray = new Float32Array(numberOfParticles * 3); // * 3 car chaque position est en 3D (x, y, z)

for (let i = 0; i < numberOfParticles; i++) {
    // Coordonnées sphériques (rayon, angleTheta, anglePhi)
    const radius = 3.5; // Le rayon de la sphère sur laquelle les particules seront placées
    const angleTheta = Math.random() * 2 * Math.PI; // Angle horizontal aléatoire
    const anglePhi = Math.acos((Math.random() * 2) - 1); // Angle vertical aléatoire, pour une distribution uniforme

    // Conversion des coordonnées sphériques en coordonnées cartésiennes
    const x = radius * Math.sin(anglePhi) * Math.cos(angleTheta);
    const y = radius * Math.sin(anglePhi) * Math.sin(angleTheta);
    const z = radius * Math.cos(anglePhi);

    // Affectation des positions dans l'array
    positionsArray[i * 3 + 0] = x;
    positionsArray[i * 3 + 1] = y;
    positionsArray[i * 3 + 2] = z;
}

// Appliquer les positions à la géométrie
spherePointsGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
spherePointsGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

// Matériau pour les points
const spherePointsMaterial = new THREE.PointsMaterial({
    size: 0.04, // Taille des particules
    transparent: true,
    opacity: 0.6,
    vertexColors: true// Couleur des particules
});

// Création de l'objet Points
const spherePoints = new THREE.Points(spherePointsGeometry, spherePointsMaterial);

// Ajout de l'objet à la scène
scene.add(spherePoints);

    // Create the particle system
    
    for (let i = 0; i < particleCount; i++) {
        // Generate random values within the sphere-shaped area
        const r = sphereRadius * Math.sqrt(Math.random());
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        // Convert from spherical to Cartesian coordinates
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        // Set the positions and colors for each particle
        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;
        particleColors[i * 3] = 1.0;
        particleColors[i * 3 + 1] = 0.5;
        particleColors[i * 3 + 2] = 0.2;
    }
    
    // Add the position and color attributes to the geometry
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Create the particle material and system
    const particleMaterial = new THREE.PointsMaterial({ size: .1, vertexColors: true });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);

    // Create a group to hold the particle system and sphere
    let cometGroup = new THREE.Group();
    cometGroup.add(particleSystem);
    scene.add(cometGroup);
    
    const animate = function () {

        requestAnimationFrame(animate);
        spherePoints.rotation.y += 0.0075;
        spherePoints.rotation.x += 0.0075 ;

        for (let i = 0; i < particleCount; i++) {

            // Move the particles down the -z axis
            particlePositions[i * 3 + 2] -= 0.2;

            // Randomly move some particles out a greater distance from the center
            if (Math.random() < 0.009) {
                particlePositions[i * 3] += (Math.random() * 2 - 1) * sphereRadius * 2;
                particlePositions[i * 3 + 1] += (Math.random() * 2 - 1) * sphereRadius * 2;
            }

            if (particlePositions[i * 3 + 2] < -25) {
                // Randomly reset some of the particles back to the sphere area
                if (Math.random() < 0.01) {
                    particlePositions[i * 3] = (Math.random() * 1.5 - .75) * sphereRadius * 1.5;
                    particlePositions[i * 3 + 1] = (Math.random() * 1.5 - .75) * sphereRadius * 1.5;
                    particlePositions[i * 3 + 2] = (Math.random() * 1.5 - .75) * sphereRadius * 1.5;
                }
            }

            // Check if the particles should move randomly or not
            if (Math.random() < 0.05) {
                // Move the particles randomly within the larger sphere area
                particlePositions[i * 3] += (Math.random() * 2 - 1) * sphereRadius * 1.5;
                particlePositions[i * 3 + 1] += (Math.random() * 2 - 1) * sphereRadius * 1.5;
                particlePositions[i * 3 + 2] += (Math.random() * 2 - 1) * sphereRadius * 1.5;
            }
           

            let colorChoice = Math.random(); // Pour choisir aléatoirement

            if (colorChoice < 0.25) {
                // Orange vif
                particleColors[i * 3] = 1.0; // Rouge au maximum
                particleColors[i * 3 + 1] = 0.65; // Vert légèrement réduit pour un orange vif
                particleColors[i * 3 + 2] = 0.0; // Pas de bleu
            } else if (colorChoice < 0.5) {
                // Bleu vif
                particleColors[i * 3] = 0.0; // Pas de rouge
                particleColors[i * 3 + 1] = 0.5; // Un peu de vert pour un bleu lumineux
                particleColors[i * 3 + 2] = 1.0; // Bleu au maximum
            } else if (colorChoice < 0.75) {
                // Bleu cyan lumineux
                particleColors[i * 3] = 0.0; // Pas de rouge
                particleColors[i * 3 + 1] = 1.0; // Vert au maximum
                particleColors[i * 3 + 2] = 1.0; // Bleu au maximum
            } else {
                // Orange clair et vif
                particleColors[i * 3] = 1.0; // Rouge au maximum
                particleColors[i * 3 + 1] = 0.75; // Un peu moins de vert pour un orange plus clair
                particleColors[i * 3 + 2] = 0.25; // Un peu de bleu pour éclaircir
            }
        
            // Mettre à jour l'attribut de couleur
            particleGeometry.attributes.color.setXYZ(i, particleColors[i * 3], particleColors[i * 3 + 1], particleColors[i * 3 + 2]);
        }
        
        
        particleGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    };

    animate();
}

init();

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burgerbtn');
    const burgerMenu = document.querySelector('.burger');

    burgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});