import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SolarScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Fog & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020612, 0.012);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 14);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0b1938, 2.2);
    scene.add(ambientLight);

    const sunPointLight = new THREE.PointLight(0xffa133, 5, 120);
    sunPointLight.position.set(-16, 10, -10);
    scene.add(sunPointLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00f6ff, 3);
    cyanRimLight.position.set(12, -4, 10);
    scene.add(cyanRimLight);

    const purpleGlowLight = new THREE.PointLight(0xa855f7, 2.5, 50);
    purpleGlowLight.position.set(0, -6, 5);
    scene.add(purpleGlowLight);

    // ----------------------------------------------------
    // 1. STARFIELD PARTICLES
    // ----------------------------------------------------
    const starCount = 2400;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorChoices = [
      new THREE.Color(0xffffff),
      new THREE.Color(0x00f6ff),
      new THREE.Color(0xa855f7),
      new THREE.Color(0xfbbf24),
    ];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 180;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 180;

      const c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // ----------------------------------------------------
    // 2. THE SUN (Glowing Orbital Star with Corona)
    // ----------------------------------------------------
    const sunGroup = new THREE.Group();
    sunGroup.position.set(-14, 8, -12);

    // Core
    const sunGeo = new THREE.SphereGeometry(3.8, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffa028 });
    const sunCore = new THREE.Mesh(sunGeo, sunMat);
    sunGroup.add(sunCore);

    // Atmosphere
    const sunGlowGeo = new THREE.SphereGeometry(4.4, 32, 32);
    const sunGlowMat = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.35,
      side: THREE.BackSide,
    });
    const sunGlow = new THREE.Mesh(sunGlowGeo, sunGlowMat);
    sunGroup.add(sunGlow);

    // Corona ring
    const coronaGeo = new THREE.RingGeometry(4.4, 8, 64);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xffb703,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const coronaRing = new THREE.Mesh(coronaGeo, coronaMat);
    coronaRing.rotation.x = Math.PI * 0.35;
    sunGroup.add(coronaRing);

    scene.add(sunGroup);

    // ----------------------------------------------------
    // 3. THE SATELLITE (Detailed Orbital Energy Station)
    // ----------------------------------------------------
    const satelliteGroup = new THREE.Group();
    satelliteGroup.position.set(3, 0.4, 0);

    // Central Core Module
    const coreGeo = new THREE.CylinderGeometry(0.7, 0.7, 2.5, 16);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x05192d,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    satelliteGroup.add(coreMesh);

    // Inner Glowing Fusion Chamber
    const reactorGeo = new THREE.SphereGeometry(0.6, 16, 16);
    const reactorMat = new THREE.MeshBasicMaterial({
      color: 0x00f6ff,
      wireframe: true,
    });
    const reactorCore = new THREE.Mesh(reactorGeo, reactorMat);
    satelliteGroup.add(reactorCore);

    // Rotating Energy Rings (Toruses)
    const ringGeo1 = new THREE.TorusGeometry(1.65, 0.05, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f6ff,
      transparent: true,
      opacity: 0.8,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 2;
    satelliteGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(1.35, 0.04, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.7,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 3;
    satelliteGroup.add(ringMesh2);

    // Solar Wing Arrays (Left and Right Photovoltaic Wings)
    const solarWingGroup = new THREE.Group();

    const makeSolarPanel = (isLeft: boolean) => {
      const panelGroup = new THREE.Group();
      const xOffset = isLeft ? -3.5 : 3.5;

      const trussGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8);
      const trussMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 });
      const truss = new THREE.Mesh(trussGeo, trussMat);
      truss.rotation.z = Math.PI / 2;
      truss.position.x = isLeft ? -1.4 : 1.4;
      panelGroup.add(truss);

      for (let p = -1; p <= 1; p++) {
        const cellGeo = new THREE.BoxGeometry(1.4, 0.05, 0.95);
        const cellMat = new THREE.MeshStandardMaterial({
          color: 0x04132b,
          emissive: 0x002244,
          metalness: 0.75,
          roughness: 0.15,
        });
        const cell = new THREE.Mesh(cellGeo, cellMat);
        cell.position.set(xOffset + p * 1.5 * (isLeft ? -1 : 1), 0, 0);

        const edges = new THREE.EdgesGeometry(cellGeo);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0x00f6ff, linewidth: 1.5 })
        );
        cell.add(line);
        panelGroup.add(cell);
      }
      return panelGroup;
    };

    const leftWing = makeSolarPanel(true);
    const rightWing = makeSolarPanel(false);
    solarWingGroup.add(leftWing);
    solarWingGroup.add(rightWing);
    satelliteGroup.add(solarWingGroup);

    // Transmitter Dish at bottom
    const dishGeo = new THREE.ConeGeometry(0.85, 0.55, 32, 1, true);
    const dishMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.85,
      roughness: 0.25,
      side: THREE.DoubleSide,
    });
    const dish = new THREE.Mesh(dishGeo, dishMat);
    dish.position.y = -1.6;
    dish.rotation.x = Math.PI;
    satelliteGroup.add(dish);

    scene.add(satelliteGroup);

    // ----------------------------------------------------
    // 4. ENERGY TRANSMISSION BEAM (Targeting Earth)
    // ----------------------------------------------------
    const beamGeo = new THREE.CylinderGeometry(0.08, 0.45, 14, 16);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x00f6ff,
      transparent: true,
      opacity: 0.6,
    });
    const energyBeam = new THREE.Mesh(beamGeo, beamMat);
    energyBeam.position.set(0, -7.5, -2);
    energyBeam.rotation.z = 0.25;
    satelliteGroup.add(energyBeam);

    // Traveling Photons along the Beam
    const photonCount = 50;
    const photonGeo = new THREE.SphereGeometry(0.07, 8, 8);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const photonGroup = new THREE.Group();

    const photons: { mesh: THREE.Mesh; speed: number; offset: number }[] = [];
    for (let i = 0; i < photonCount; i++) {
      const pMesh = new THREE.Mesh(photonGeo, photonMat);
      photonGroup.add(pMesh);
      photons.push({
        mesh: pMesh,
        speed: 0.06 + Math.random() * 0.07,
        offset: Math.random() * 14,
      });
    }
    satelliteGroup.add(photonGroup);

    // ----------------------------------------------------
    // 5. EARTH NIGHT GLOBE (Curved Horizon at Bottom)
    // ----------------------------------------------------
    const earthGroup = new THREE.Group();
    earthGroup.position.set(-2, -22, -8);

    const earthGeo = new THREE.SphereGeometry(18, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x030b1e,
      roughness: 0.85,
      metalness: 0.1,
      emissive: 0x020713,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // Earth Glowing Atmosphere Rim
    const atmoGeo = new THREE.SphereGeometry(18.4, 64, 64);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x00f6ff,
      transparent: true,
      opacity: 0.22,
      side: THREE.BackSide,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    earthGroup.add(atmoMesh);

    // City lights on Earth surface
    const cityCount = 200;
    const cityPositions = new Float32Array(cityCount * 3);
    for (let i = 0; i < cityCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 18.04;
      cityPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      cityPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      cityPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const cityGeo = new THREE.BufferGeometry();
    cityGeo.setAttribute('position', new THREE.BufferAttribute(cityPositions, 3));
    const cityMat = new THREE.PointsMaterial({
      size: 0.3,
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.85,
    });
    const cityLights = new THREE.Points(cityGeo, cityMat);
    earthGroup.add(cityLights);

    scene.add(earthGroup);

    // ----------------------------------------------------
    // 6. SCROLL & MOUSE TRACKING
    // ----------------------------------------------------
    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    handleScroll();

    // ----------------------------------------------------
    // 7. ANIMATION LOOP
    // ----------------------------------------------------
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.06;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Ambient idle rotations
      starField.rotation.y = elapsedTime * 0.01;
      starField.rotation.x = elapsedTime * 0.005;

      ringMesh1.rotation.z = elapsedTime * 0.7;
      ringMesh2.rotation.x = elapsedTime * -0.6;
      reactorCore.rotation.y = elapsedTime * 1.5;

      sunCore.rotation.y = elapsedTime * 0.05;
      coronaRing.rotation.z = elapsedTime * 0.04;

      earthMesh.rotation.y = elapsedTime * 0.02;
      cityLights.rotation.y = elapsedTime * 0.02;

      // Energy Beam Pulse
      const beamScale = 1 + Math.sin(elapsedTime * 6) * 0.15;
      beamMat.opacity = 0.5 + Math.sin(elapsedTime * 8) * 0.2;
      energyBeam.scale.set(beamScale, 1, beamScale);

      // Photons animation
      photons.forEach((p) => {
        p.offset += p.speed;
        if (p.offset > 14) p.offset = 0;
        p.mesh.position.y = -p.offset;
        p.mesh.position.x = (Math.random() - 0.5) * 0.08;
        p.mesh.position.z = (Math.random() - 0.5) * 0.08;
      });

      // SCROLL ANIMATION OF THE SOLAR SATELLITE & CAMERA
      const sp = scrollProgress;

      // Camera smoothly tracks and moves across orbit
      camera.position.x = THREE.MathUtils.lerp(0, -3.2, sp) + mouseX * 0.5;
      camera.position.y = THREE.MathUtils.lerp(1.5, -4.8, sp) - mouseY * 0.35;
      camera.position.z = THREE.MathUtils.lerp(14, 9.8, sp);

      // LookAt adapts with scroll
      const targetLookX = THREE.MathUtils.lerp(1.5, 0, sp);
      const targetLookY = THREE.MathUtils.lerp(0.5, -6, sp);
      const targetLookZ = THREE.MathUtils.lerp(0, -2, sp);
      camera.lookAt(targetLookX, targetLookY, targetLookZ);

      // Satellite orientation and coordinates on scroll
      satelliteGroup.position.x = THREE.MathUtils.lerp(3.2, 0.2, sp);
      satelliteGroup.position.y = THREE.MathUtils.lerp(0.4, 2.4, sp);
      satelliteGroup.rotation.y = THREE.MathUtils.lerp(0.35, Math.PI * 1.35, sp) + Math.sin(elapsedTime * 0.4) * 0.04;
      satelliteGroup.rotation.x = THREE.MathUtils.lerp(0.12, -0.32, sp) + Math.cos(elapsedTime * 0.3) * 0.03;
      satelliteGroup.rotation.z = THREE.MathUtils.lerp(-0.08, 0.18, sp);

      // Sun shifts slightly with parallax
      sunGroup.position.x = THREE.MathUtils.lerp(-14, -7, sp);
      sunGroup.position.y = THREE.MathUtils.lerp(8, 14, sp);

      // Earth rises up as user reaches bottom sections
      earthGroup.position.y = THREE.MathUtils.lerp(-24, -16.5, sp);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
};
