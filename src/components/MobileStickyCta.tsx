"use client";

import { useEffect, useRef, useState } from "react";
import { product } from "@/lib/content";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const offerRef = useRef<Element | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) setVisible(true);

      const offer = offerRef.current || document.getElementById("offre");
      if (offer) {
        offerRef.current = offer;
        const rect = offer.getBoundingClientRect();
        if (rect.top < window.innerHeight) setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-cta" aria-label="Offre promotionnelle">
      <div className="sticky-price-block">
        <span className="sticky-price">{product.price}</span>
        <span className="sticky-old-price">{product.compareAt}</span>
      </div>
      <a className="btn btn-ember sticky-btn" href={product.checkoutUrl}>
        Je télécharge maintenant
      </a>
    </div>
  );
}
