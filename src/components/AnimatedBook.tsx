"use client";

import { useRef, useState } from "react";
import { product } from "@/lib/content";

export function AnimatedBook() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Angles 3D naturels : inclinaison 3/4 élégante et fluide
  const rotateY = isHovered ? -16 + mousePos.x * 20 : -16;
  const rotateX = isHovered ? 4 - mousePos.y * 16 : 4;

  return (
    <div
      ref={containerRef}
      className="book-showcase"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="book-stage-3d">
        <div
          className="book-3d"
          style={{
            transform: `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          }}
        >
          {/* Tranche latérale gauche (Spine rigide avec titre embossé) */}
          <div className="book-spine-3d" aria-hidden="true">
            <span className="spine-rib top" />
            <div className="spine-content">
              <span className="spine-author">SEFO</span>
              <span className="spine-title">VAINCRE LA PEUR EN UN CLIN D&apos;ŒIL</span>
            </div>
            <span className="spine-rib bottom" />
          </div>

          {/* Face avant : Couverture avec cadrage parfait de vaincre-peur-thumb.png */}
          <div className="book-front-3d">
            <div className="book-cover-frame">
              <img
                src={product.thumb}
                alt={`Couverture officielle de l'ouvrage : ${product.name}`}
                className="book-cover-img"
                width={600}
                height={600}
                loading="eager"
              />
              {/* Rainure de charnière de la reliure */}
              <div className="book-crease-overlay" aria-hidden="true" />
              {/* Reflet satiné de la couverture */}
              <div className="book-sheen-overlay" aria-hidden="true" />
            </div>
          </div>

          {/* Tranche des pages (épaisseur papier sur le côté droit) */}
          <div className="book-pages-right" aria-hidden="true" />

          {/* Tranche des pages supérieure */}
          <div className="book-pages-top" aria-hidden="true" />

          {/* Tranche des pages inférieure */}
          <div className="book-pages-bottom" aria-hidden="true" />

          {/* Ruban marque-page satin ambre qui dépasse au bas du livre */}
          <div className="book-bookmark-ribbon" aria-hidden="true" />
        </div>

        {/* Ombre portée multi-couches au sol */}
        <div
          className="book-ground-shadow"
          style={{
            transform: `scale(${isHovered ? 1.06 : 1})`,
          }}
          aria-hidden="true"
        />
      </div>

      <div className="book-badge">
        <span className="badge-bullet">●</span>
        <div>
          <strong>Format numérique immédiat (PDF Haute Définition)</strong>
          <small>Guide de 35 pages + Bonus pratique de 13 pages inclus</small>
        </div>
      </div>
    </div>
  );
}
