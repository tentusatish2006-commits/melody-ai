import { useParams } from 'react-router-dom'
import { sampleTracks } from '../data/sampleTracks'
import TrackCard from '../components/TrackCard'

export default function Album() {
  const { name } = useParams()
  const decoded = decodeURIComponent(name)
  const tracks = sampleTracks.filter(t => t.album === decoded)

  return (
    <div>
      <h1 className="section-title" style={{ marginTop: 0 }}>{decoded}</h1>
      {tracks.length === 0 ? (
        <div className="empty-state">No tracks found for this album.</div>
      ) : (
        <div className="card-grid">
          {tracks.map(t => <TrackCard key={t.id} track={t} queue={tracks} />)}
        </div>
      )}
    </div>
  )
}
