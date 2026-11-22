import { config } from '../config';

interface Props {
  isOpen: boolean;
  guestName: string;
  onOpen: () => void;
}

export default function Cover({ isOpen, guestName, onOpen }: Props) {
  const { couple, events } = config;

  const receptions = events.filter((e) =>
    e.type.toLowerCase().includes('resepsi')
  );

  return (
    <div className={`cover${isOpen ? ' hidden' : ''}`}>
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
