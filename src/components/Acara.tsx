import { useFadeUp } from '../hooks/useFadeUp';
import { config } from '../config';

export default function Acara() {
  const ref = useFadeUp<HTMLElement>();
  const { events } = config;

  return (
    <section ref={ref} className="section fade-up">
      <div className="section-label">The Event</div>
      <div className="section-title">
        Detail<br />
        <em>Acara</em>
      </div>
      <div className="ornament">✦  ✦  ✦</div>

      <div className="event-cards">
        {events.map((ev, i) => (
          <div key={i} className="event-card">
            <div className="event-icon">{ev.icon}</div>
            <div className="event-type">{ev.type}</div>
            <div className="event-name">{ev.name}</div>
            <div className="event-detail">
              <span className="icon">📅</span>
              <span><strong>{ev.date}</strong></span>
            </div>
            <div className="event-detail">
              <span className="icon">🕗</span>
              <span><strong>{ev.time}</strong></span>
            </div>
            <div className="event-detail">
              <span className="icon">📍</span>
              <span>
                <strong>{ev.venue}</strong>
                <br />{ev.address}
              </span>
            </div>
            {ev.mapsUrl && (
              <a
                className="btn-maps"
                href={ev.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                🗺 Google Maps
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
