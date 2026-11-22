import { useFadeUp } from '../hooks/useFadeUp';
import { useCountdown } from '../hooks/useCountdown';
import { config } from '../config';

export default function Countdown() {
  const ref = useFadeUp<HTMLElement>();
  const { days, hours, minutes, seconds } = useCountdown(config.countdown.targetDate);

  const items = [
    { value: days,    label: 'Hari' },
    { value: hours,   label: 'Jam' },
    { value: minutes, label: 'Menit' },
    { value: seconds, label: 'Detik' },
  ];

  return (
    <section ref={ref} className="countdown-section fade-up">
      <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label">Counting Down</div>
        <div className="section-title">
          Menuju<br />
          <span className="countdown-title-em">Hari Bahagia</span>
        </div>
        <div className="ornament">✦  ✦  ✦</div>
        <div className="countdown-wrap">
          {items.map((item, i) => (
            <div key={item.label} style={{ display: 'contents' }}>
              <div className="countdown-item">
                <div className="countdown-num">{item.value}</div>
                <div className="countdown-label">{item.label}</div>
              </div>
              {i < items.length - 1 && (
                <div className="countdown-sep">:</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
