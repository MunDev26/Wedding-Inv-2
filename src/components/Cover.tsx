import { config } from '../config';

interface Props {
  isOpen: boolean;
  guestName: string;
  onOpen: () => void;
}

export default function Cover({ isOpen, guestName, onOpen }: Props) {
  const { couple, events } = config;
  const coverPhoto = config.photos.cover;

  const receptions = events.filter((e) =>
    e.type.toLowerCase().includes('resepsi')
  );

  const coverStyle = coverPhoto
    ? { backgroundImage: `linear-gradient(160deg,rgba(26,43,34,.80) 0%,rgba(36,61,46,.72) 55%,rgba(15,30,23,.90) 100%),url('${coverPhoto}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : undefined;

  return (
    <div className={`cover${isOpen ? ' hidden' : ''}`} style={coverStyle}>
      <div className="cover-leaf">🌿 🌿 🌿</div>
      <div className="cover-label">Undangan Pernikahan</div>
      <div className="cover-dear">Kepada Yth.</div>
      <div className="cover-guest">{guestName}</div>
      <div className="cover-names">
        {couple.groom.nickname}
        <span className="cover-amp">&amp;</span>
        {couple.bride.nickname}
      </div>
      <div className="cover-dates">
        {receptions.map((r, i) => (
          <>
            {i > 0 && <div key={`div-${i}`} className="cover-date-vline" />}
            <div key={r.type} className="cover-date-row">
              <span className="cover-date-side">
                {r.type.replace('Resepsi ', '')}
              </span>
              <span className="cover-date-tag">Resepsi</span>
              <span className="cover-date">{r.date}</span>
            </div>
          </>
        ))}
      </div>
      <div className="cover-line" />
      <button className="btn-open" onClick={onOpen}>
        ✉ Buka Undangan
      </button>
    </div>
  );
}
