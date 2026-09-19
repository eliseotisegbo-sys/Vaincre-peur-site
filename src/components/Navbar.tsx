"use client";

import { useState } from "react";
import { cta, product } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="bar" aria-label="Annonce promotionnelle">
        <span className="bar-tag">Offre 24H</span>
        <span>
          Le guide à <b>{product.price}</b> au lieu de <span className="bar-old">{product.compareAt}</span> ({product.discountPercent}). Fin ce soir à minuit. Téléchargement immédiat.
        </span>
      </aside>
      <header className="nav">
        <div className="wrap nav-row">
          <a className="brand" href="#top" aria-label="Retour en haut de page">
            <img src={product.logo} alt="" width={32} height={32} />
            <span className="brand-text">{product.brand}</span>
          </a>
          <nav aria-label="Navigation principale">
            <button
              className="menu"
              aria-expanded={open}
              aria-controls="main-menu"
              aria-label="Ouvrir le menu de navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <span>Menu</span>
            </button>
            <ul id="main-menu" className={`links ${open ? "open" : ""}`}>
              <li><a href="#probleme" onClick={() => setOpen(false)}>Le problème</a></li>
              <li><a href="#histoire" onClick={() => setOpen(false)}>L'histoire</a></li>
              <li><a href="#methode" onClick={() => setOpen(false)}>La méthode</a></li>
              <li><a href="#preuves" onClick={() => setOpen(false)}>Preuves</a></li>
              <li><a href="#contenu" onClick={() => setOpen(false)}>Contenu</a></li>
              <li><a href="#apercu" onClick={() => setOpen(false)}>Aperçu</a></li>
              <li><a href="#faq" onClick={() => setOpen(false)}>FAQ</a></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-ember" href={product.checkoutUrl}>
              {cta.header}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
