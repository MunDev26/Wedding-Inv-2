import { config } from '../config';

export default function Footer() {
  const { couple, meta, footer } = config;

  return (
    <footer>
      <div className="section-label footer-label">Thank You</div>
      <div className="footer-names">
        {couple.groom.nickname} &amp; {couple.bride.nickname}
      </div>
      <div className="footer-date">{meta.dateShort}</div>
      <div className="ornament footer-ornament">✦  ✦  ✦</div>
      <p className="footer-closing">{footer.closing}</p>
      <div className="ornament footer-ornament" style={{ fontSize: '.7rem' }}>
        🌿 ✦ 🌿
      </div>
      <div className="footer-made">{footer.madeBy}</div>
    </footer>
  );
}
