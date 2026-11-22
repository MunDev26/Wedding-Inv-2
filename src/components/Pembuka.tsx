import { useFadeUp } from '../hooks/useFadeUp';
import { config } from '../config';

export default function Pembuka() {
  const ref = useFadeUp<HTMLElement>();
  const { opening } = config;

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
        <p className="hero-verse">
          {opening.verse}
          <cite>{opening.verseSource}</cite>
        </p>
      </div>
    </section>
  );
}
