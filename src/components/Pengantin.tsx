import { useFadeUp } from '../hooks/useFadeUp';
import { config } from '../config';

interface Person {
  nickname: string;
  fullName: string;
  degree: string;
  initial: string;
  position: string;
  father: string;
  mother: string;
}

function CoupleCard({ person }: { person: Person }) {
  return (
    <div className="couple-card">
      <div className="couple-initial">{person.initial}</div>
      <div className="couple-name">{person.nickname}</div>
      <div className="couple-full">{person.fullName}</div>
      <div className="couple-degree">{person.degree}</div>
      <div className="couple-parents">
        <strong>{person.position}:</strong>
        <br />
        {person.father} &amp; {person.mother}
      </div>
    </div>
  );
}

export default function Pengantin() {
  const ref = useFadeUp<HTMLElement>();
  const { couple } = config;

  return (
    <section ref={ref} className="section fade-up">
      <div className="section-label">The Couple</div>
      <div className="section-title">
        Kedua<br />
        <em>Mempelai</em>
      </div>
      <div className="ornament">✦  ✦  ✦</div>
      <div className="couple-wrap">
        <CoupleCard person={couple.groom} />
        <div className="couple-amp-center">❧</div>
        <CoupleCard person={couple.bride} />
      </div>
    </section>
  );
}
