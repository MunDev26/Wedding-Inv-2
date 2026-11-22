import { useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';
import { config } from '../config';

type Tab = 'bank' | 'kado';

function CopyButton({ copyValue, label }: { copyValue: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      className={`btn-copy${copied ? ' copied' : ''}`}
      onClick={handleCopy}
    >
      {copied ? '✓ Tersalin!' : `⎘ ${label}`}
    </button>
  );
}

export default function AmplopDigital() {
  const ref = useFadeUp<HTMLElement>();
  const [activeTab, setActiveTab] = useState<Tab>('bank');
  const { gift } = config;

  const tabs: { id: Tab; label: string }[] = [
    { id: 'bank', label: 'Transfer Bank' },
    { id: 'kado', label: 'Kado Fisik' },
  ];

  return (
    <section ref={ref} className="section fade-up">
      <div className="section-label">Wedding Gift</div>
      <div className="section-title">
        Amplop<br />
        <em>Digital</em>
      </div>
      <div className="ornament">✦  ✦  ✦</div>
      <p className="gift-desc" style={{ whiteSpace: 'pre-line' }}>
        {gift.description}
      </p>

      {/* Tabs */}
      <div className="gift-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`gift-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel: Transfer Bank */}
      <div className={`gift-panel${activeTab === 'bank' ? ' active' : ''}`}>
        {gift.bankAccounts.map((acc, i) => (
          <div key={i}>
            <div className="bank-card" style={i > 0 ? { marginTop: '1.5rem' } : {}}>
              <div className="bank-name">{acc.bank}</div>
              <div className="bank-number">{acc.number}</div>
              <div className="bank-holder">{acc.holder}</div>
            </div>
            <CopyButton copyValue={acc.copyValue} label="Salin Nomor Rekening" />
          </div>
        ))}
      </div>

      {/* Panel: Kado Fisik */}
      <div className={`gift-panel${activeTab === 'kado' ? ' active' : ''}`}>
        <div className="address-box">
          <strong>{gift.address.title}</strong>
          {gift.address.lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < gift.address.lines.length - 1 && <br />}
            </span>
          ))}
          <span className="address-recipient">
            Penerima: {gift.address.recipient} ({gift.address.phone})
          </span>
        </div>
        <CopyButton copyValue={gift.address.copyValue} label="Salin Alamat" />
      </div>
    </section>
  );
}
