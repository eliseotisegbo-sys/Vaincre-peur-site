"use client";

import { useEffect, useRef, useState } from "react";
import { product } from "@/lib/content";

export function ProductMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(product.video.src, { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setHasVideo(true);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideo) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [hasVideo]);

  return (
    <div className="cover">
      {hasVideo ? (
        <video
          ref={videoRef}
          poster={product.video.poster}
          muted
          playsInline
          loop
          preload="none"
          aria-label={product.name}
        >
          <source src={product.video.src} type="video/mp4" />
        </video>
      ) : (
        <img src={product.cover} alt={`Couverture : ${product.name}`} width={640} height={640} />
      )}
    </div>
  );
}
