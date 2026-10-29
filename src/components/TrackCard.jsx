import { usePlayer } from '../context/PlayerContext'

export default function TrackCard({ track, queue = null }) {
  const { playTrack } = usePlayer()

  const handlePlay = (e) => {
    e.stopPropagation()
    playTrack(track, queue || [track])
  }

  return (
    <div className="track-card" onClick={handlePlay} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handlePlay(e)}>
      <img src={track.artwork} alt={track.title} loading="lazy" />
      <div className="info">
        <div className="title">{track.title}</div>
        <div className="subtitle">{track.artist}</div>
      </div>
    </div>
  )
}
