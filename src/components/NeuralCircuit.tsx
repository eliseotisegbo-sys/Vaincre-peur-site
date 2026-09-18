"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  energy: number;
  pulsePhase: number;
}

interface ClickImpulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export function NeuralCircuit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respecter la préférence de réduction de mouvement
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      leaveTimer: 0,
    };

    const impulses: ClickImpulse[] = [];

    // Ajustement de la densité de neurones selon la taille d'écran
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 65);
    const connectionDist = Math.min(width * 0.16, 130);
    const mouseConnectDist = 170;

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: 2 + Math.random() * 2,
        baseRadius: 2 + Math.random() * 2,
        energy: 0,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      window.clearTimeout(mouse.leaveTimer);
      mouse.leaveTimer = window.setTimeout(() => {
        mouse.active = false;
      }, 3000);
    };

    const handleClick = (e: MouseEvent) => {
      // Déclencher une impulsion synaptique au clic
      impulses.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 220,
        alpha: 0.85,
      });

      // Exciter les neurones proches du clic
      for (const node of nodes) {
        const dx = node.x - e.clientX;
        const dy = node.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          node.energy = Math.max(node.energy, (1 - dist / 220) * 1.8);
          // Légère poussée physique
          node.vx += (dx / (dist + 10)) * 1.5;
          node.vy += (dy / (dist + 10)) * 1.5;
        }
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    // Boucle de rendu Canvas 60fps
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Mise à jour et dessin des ondes d'impulsions synaptiques (clics)
      for (let i = impulses.length - 1; i >= 0; i--) {
        const imp = impulses[i];
        imp.radius += 4.5;
        imp.alpha *= 0.94;

        ctx.save();
        ctx.beginPath();
        ctx.arc(imp.x, imp.y, imp.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(230, 81, 0, ${imp.alpha * 0.55})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Onde secondaire fine
        if (imp.radius > 20) {
          ctx.beginPath();
          ctx.arc(imp.x, imp.y, imp.radius - 16, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245, 158, 11, ${imp.alpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.restore();

        if (imp.alpha < 0.02 || imp.radius >= imp.maxRadius) {
          impulses.splice(i, 1);
        }
      }

      // 2. Mise à jour des neurones
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Mouvement
        node.x += node.vx;
        node.y += node.vy;

        // Amortissement de vitesse vers la vitesse de croisière
        node.vx *= 0.985;
        node.vy *= 0.985;
        if (Math.abs(node.vx) < 0.15) node.vx += (Math.random() - 0.5) * 0.08;
        if (Math.abs(node.vy) < 0.15) node.vy += (Math.random() - 0.5) * 0.08;

        // Rebond doux sur les bords
        if (node.x < 0) { node.x = 0; node.vx *= -1; }
        if (node.x > width) { node.x = width; node.vx *= -1; }
        if (node.y < 0) { node.y = 0; node.vy *= -1; }
        if (node.y > height) { node.y = height; node.vy *= -1; }

        // Interaction avec la souris (passage du curseur sur PC)
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseConnectDist) {
            // Légère attraction synaptique vers le curseur
            const force = (1 - dist / mouseConnectDist) * 0.035;
            node.vx += dx * force;
            node.vy += dy * force;
            node.energy = Math.max(node.energy, (1 - dist / mouseConnectDist) * 0.9);
          }
        }

        // Dissipation douce de l'énergie synaptique
        node.energy *= 0.96;
        node.pulsePhase += 0.03;
      }

      // 3. Dessin des synapses (lignes entre neurones)
      for (let i = 0; i < nodes.length; i++) {
        const nA = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const nB = nodes[j];
          const dx = nB.x - nA.x;
          const dy = nB.y - nA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const proximity = 1 - dist / connectionDist;
            const energyBoost = (nA.energy + nB.energy) * 0.5;
            const alpha = Math.min(proximity * 0.35 + energyBoost * 0.45, 0.85);

            ctx.beginPath();
            ctx.moveTo(nA.x, nA.y);
            ctx.lineTo(nB.x, nB.y);

            // Couleur ambrée avec transition vers l'or quand excité
            if (energyBoost > 0.3) {
              ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
              ctx.lineWidth = 1.2 + energyBoost * 0.8;
            } else {
              ctx.strokeStyle = `rgba(230, 81, 0, ${alpha * 0.7})`;
              ctx.lineWidth = 0.8;
            }
            ctx.stroke();
          }
        }

        // Connexion directe avec la souris si proche
        if (mouse.active) {
          const dxM = mouse.x - nA.x;
          const dyM = mouse.y - nA.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);

          if (distM < mouseConnectDist) {
            const mAlpha = (1 - distM / mouseConnectDist) * 0.55;
            ctx.beginPath();
            ctx.moveTo(nA.x, nA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(230, 81, 0, ${mAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // 4. Dessin des corps de neurones (nœuds)
      for (const node of nodes) {
        const pulse = Math.sin(node.pulsePhase) * 0.6;
        const currentRadius = node.baseRadius + pulse + node.energy * 2;

        // Halo d'énergie synaptique
        if (node.energy > 0.15) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 158, 11, ${node.energy * 0.25})`;
          ctx.fill();
        }

        // Nœud central
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        if (node.energy > 0.4) {
          ctx.fillStyle = `rgba(255, 183, 77, 0.9)`;
        } else {
          ctx.fillStyle = `rgba(230, 81, 0, 0.65)`;
        }
        ctx.fill();
      }

      // 5. Curseur actif comme électrode cognitive
      if (mouse.active) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(230, 81, 0, 0.75)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(245, 158, 11, 0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="neural-circuit-canvas-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="neural-circuit-canvas" />
    </div>
  );
}
