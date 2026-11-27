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

function CoupleCard({ person, photo }: { person: Person; photo: string }) {
  return (
    <div className="couple-card">
      <span className="cc-corner tl" />
      <span className="cc-corner tr" />
      <span className="cc-corner bl" />
      <span className="cc-corner br" />

      {photo ? (
        <div className="couple-photo-wrap">
          <span className="cp-corner tl" />
          <span className="cp-corner tr" />
          <span className="cp-corner bl" />
          <span className="cp-corner br" />
          <span className="cp-ornament top">✦ ✦ ✦</span>
          <img src={photo} alt={person.nickname} />
          <span className="cp-ornament bot">✦ ✦ ✦</span>
        </div>
      ) : (
        <div className="couple-initial">{person.initial}</div>
      )}

      <div className="cc-divider">— ✦ —</div>
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
  const { groom: groomPhoto, bride: bridePhoto } = config.photos;

  return (
    <section ref={ref} className="section fade-up">
      <div className="section-label">The Couple</div>
      <div className="section-title">
        Kedua<br />
        <em>Mempelai</em>
      </div>
      <div className="ornament">✦  ✦  ✦</div>
      <div className="couple-wrap">
        <CoupleCard person={couple.groom} photo={groomPhoto} />
        <div className="couple-amp-center">❧</div>
        <CoupleCard person={couple.bride} photo={bridePhoto} />
      </div>
    </section>
  );
}
