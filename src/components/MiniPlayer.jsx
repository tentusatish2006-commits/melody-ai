import { useState } from 'react'
import { usePlayer } from '../context/PlayerContext'
import MusicPlayer from './MusicPlayer'

export default function MiniPlayer() {
  const {
    currentTrack, isPlaying,
    togglePlay, nextTrack, prevTrack
  } = usePlayer()
  const [showFull, setShowFull] = useState(false)

  if (!currentTrack) return null

  return (
    <>
      <div className="mini-player" onClick={() => setShowFull(true)}>
        <img src={currentTrack.artwork} alt="" />
        <div className="info">
          <div className="title">{currentTrack.title}</div>
          <div className="artist">{currentTrack.artist}</div>
        </div>
        <div className="player-controls" onClick={e => e.stopPropagation()}>
          <button onClick={prevTrack} aria-label="Previous">⏮</button>
          <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? '⏸' : '▶️'}
          </button>
          <button onClick={nextTrack} aria-label="Next">⏭</button>
        </div>
      </div>

      {showFull && (
        <MusicPlayer onClose={() => setShowFull(false)} />
      )}
    </>
  )
}
