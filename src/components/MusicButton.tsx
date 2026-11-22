interface Props {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicButton({ isPlaying, onToggle }: Props) {
  return (
    <button
      className={`audio-btn${isPlaying ? ' playing' : ''}`}
      onClick={onToggle}
      title="Putar / Pause musik"
      aria-label={isPlaying ? 'Pause musik' : 'Putar musik'}
    >
      {isPlaying ? '⏸' : '♪'}
    </button>
  );
}
