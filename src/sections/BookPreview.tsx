"use client";

import { useState } from "react";
import { cta, previewPages, product } from "@/lib/content";
import Image from "next/image";

export function BookPreview() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : i));
  const next = () => setLightboxIdx((i) => (i !== null && i < previewPages.length - 1 ? i + 1 : i));

  return (
    <section className="block reveal-on-scroll" id="apercu">
      <div className="wrap">
        <div className="section-head text-center">
          <p className="kicker">UN APERÇU</p>
          <h2>Regardez l'intérieur avant d'acheter.</h2>
          <p className="intro centered">
            Voici trois pages réelles du guide et du cahier d'exercices. Pas de mise en scène :
            c'est exactement ce que vous recevez.
          </p>
        </div>

        <div className="preview-grid">
          {previewPages.map((page, idx) => (
            <button
              key={idx}
              className="preview-card hover-lift"
              onClick={() => openLightbox(idx)}
              aria-label={`Agrandir : ${page.title}`}
            >
              <div className="preview-img-wrap">
                <Image
                  src={page.src}
                  alt={page.title}
                  width={320}
                  height={420}
                  className="preview-img"
                />
                <span className="preview-zoom-hint" aria-hidden="true">Agrandir</span>
              </div>
              <p className="preview-title">{page.title}</p>
              <p className="preview-desc">{page.desc}</p>
            </button>
          ))}
        </div>

        <div className="preview-cta-row">
          <a className="btn btn-ember" href={product.checkoutUrl}>
            {cta.previewEnd}
          </a>
        </div>
      </div>

      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Aperçu : ${previewPages[lightboxIdx].title}`}
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
        >
          <div className="lightbox-inner">
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer">✕</button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={prev}
              disabled={lightboxIdx === 0}
              aria-label="Page précédente"
            >‹</button>
            <Image
              src={previewPages[lightboxIdx].src}
              alt={previewPages[lightboxIdx].title}
              width={600}
              height={800}
              className="lightbox-img"
            />
            <button
              className="lightbox-nav lightbox-next"
              onClick={next}
              disabled={lightboxIdx === previewPages.length - 1}
              aria-label="Page suivante"
            >›</button>
            <p className="lightbox-caption">{previewPages[lightboxIdx].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
