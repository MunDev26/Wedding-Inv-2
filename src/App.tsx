import { useState, useEffect, useRef } from 'react';
import { config } from './config';
import Cover from './components/Cover';
import Pembuka from './components/Pembuka';
import Pengantin from './components/Pengantin';
import Acara from './components/Acara';
import Countdown from './components/Countdown';
import AmplopDigital from './components/AmplopDigital';
import Footer from './components/Footer';
import MusicButton from './components/MusicButton';

function getGuestName(): string {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('to');
  return name ? decodeURIComponent(name) : config.meta.defaultGuest;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const guestName = getGuestName();

  useEffect(() => {
    document.title = config.meta.title;
  }, []);

  useEffect(() => {
    if (!config.meta.musicUrl) return;
    const audio = new Audio(config.meta.musicUrl);
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    if (config.meta.musicUrl && audioRef.current) {
      audioRef.current.play().catch(() => {
        /* autoplay blocked by browser — user can toggle manually */
      });
      setIsPlaying(true);
    }
  };

  const handleMusicToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <Cover isOpen={isOpen} guestName={guestName} onOpen={handleOpen} />

      {config.meta.musicUrl && isOpen && (
        <MusicButton isPlaying={isPlaying} onToggle={handleMusicToggle} />
      )}

      <div className={`main${isOpen ? ' visible' : ''}`}>
        <Pembuka />
        <Pengantin />
        <Acara />
        <Countdown />
        <AmplopDigital />
        <Footer />
      </div>
    </>
  );
}
