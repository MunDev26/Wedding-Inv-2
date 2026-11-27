import { useEffect, useRef, useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';
import { config } from '../config';

function HeroSlider({ slides }: { slides: readonly string[] }) {
  const [cur, setCur] = useState(0);
  const startX = useRef(0);
  const total = slides.length;

  const go = (n: number) => setCur((n + total) % total);

  useEffect(() => {
    const id = setInterval(() => go(cur + 1), 3500);
    return () => clearInterval(id);
  }, [cur]);

  return (
    <div className="hero-slider-wrap">
      <div className="hero-slider">
        <div
          className="hero-slides"
          style={{ transform: `translateX(-${cur * 200}px)` }}
          onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = startX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) go(cur + (diff > 0 ? 1 : -1));
          }}
        >
          {slides.map((src, i) => (
            <img key={i} src={src} alt={`Foto ${i + 1}`} />
          ))}
        </div>
      </div>
      <div className="hf-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hf-dot${i === cur ? ' active' : ''}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Pembuka() {
  const ref = useFadeUp<HTMLElement>();
  const { opening } = config;
  const slides = config.photos.slides;

  return (
    <section ref={ref} className="section fade-up">
      <div className="section-label">Bismillah</div>
      <div className="section-title">
        Dengan Penuh<br />
        <em>Kebahagiaan</em>
      </div>
      <div className="ornament">✦  ✦  ✦</div>
      <div className="hero-frame">
        <div className="hero-corner tl" />
        <div className="hero-corner tr" />
        <div className="hero-corner bl" />
        <div className="hero-corner br" />
        <div className="hero-bismillah">{opening.bismillah}</div>
        <HeroSlider slides={slides} />
        <p className="hero-verse">
          {opening.verse}
          <cite>{opening.verseSource}</cite>
        </p>
      </div>
    </section>
  );
}
