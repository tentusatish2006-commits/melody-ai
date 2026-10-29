import { usePlayer } from '../context/PlayerContext'
import { formatTime } from '../utils/helpers'

export default function MusicPlayer({ onClose }) {
  const {
    currentTrack, isPlaying, progress, duration, volume,
    shuffle, repeat,
    togglePlay, nextTrack, prevTrack, seek, setVolume,
    setShuffle, setRepeat, favourites, toggleFavourite
  } = usePlayer()

  if (!currentTrack) return null

  const isFav = favourites.includes(currentTrack.id)

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    seek(pct * (duration || 0))
  }

  return (
    <div className="full-player">
      <button className="close-btn" onClick={onClose} aria-label="Close player">
        ↓
      </button>

      <img src={currentTrack.artwork} alt={currentTrack.title} />
      <h2>{currentTrack.title}</h2>
      <p className="meta">{currentTrack.artist}</p>
      {currentTrack.movie && <p className="meta">From: {currentTrack.movie}</p>}
      {currentTrack.album && <p className="meta">{currentTrack.album}</p>}

      <div style={{ width: '100%', maxWidth: 340, marginTop: 20 }}>
        <div className="progress-bar" onClick={handleSeek} role="slider" aria-valuenow={progress}>
          <div className="fill" style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }} />
        </div>
        <div className="flex justify-between text-secondary" style={{ fontSize: '0.8rem', marginTop: 6 }}>
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-controls" style={{ marginTop: 28, gap: 18, fontSize: '1.7rem' }}>
        <button
          onClick={() => setShuffle(!shuffle)}
          style={{ opacity: shuffle ? 1 : 0.45 }}
          aria-label="Shuffle"
        >
          🔀
        </button>
        <button onClick={prevTrack} aria-label="Previous">⏮</button>
        <button onClick={togglePlay} style={{ fontSize: '2.3rem' }} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? '⏸' : '▶️'}
        </button>
        <button onClick={nextTrack} aria-label="Next">⏭</button>
        <button
          onClick={() => setRepeat(repeat === 'off' ? 'all' : repeat === 'all' ? 'one' : 'off')}
          aria-label="Repeat"
        >
          {repeat === 'one' ? '🔂' : '🔁'}
        </button>
      </div>

      <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: '0.9rem' }}>🔈</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={e => setVolume(parseFloat(e.target.value))}
          style={{ flex: 1, accentColor: 'var(--accent)' }}
          aria-label="Volume"
        />
      </div>

      <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className="btn-ghost" onClick={() => toggleFavourite(currentTrack.id)}>
          {isFav ? '♥ Favourited' : '♡ Favourite'}
        </button>
        {currentTrack.downloadAllowed ? (
          <a
            className="btn"
            href={currentTrack.audioUrl}
            download={`${currentTrack.title}.mp3`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        ) : (
          <button className="btn-ghost" disabled title="Download not authorized for this track">
            Download unavailable
          </button>
        )}
      </div>
    </div>
  )
}
