import { useParams } from 'react-router-dom'
import { sampleTracks } from '../data/sampleTracks'
import TrackCard from '../components/TrackCard'

export default function Movie() {
  const { name } = useParams()
  const decoded = decodeURIComponent(name)
  const tracks = sampleTracks.filter(t => t.movie === decoded)

  return (
    <div>
      <h1 className="section-title" style={{ marginTop: 0 }}>{decoded}</h1>
      <p className="text-secondary mb-2">Movie soundtrack (demo)</p>
      {tracks.length === 0 ? (
        <div className="empty-state">No tracks found.</div>
      ) : (
        <div className="card-grid">
          {tracks.map(t => <TrackCard key={t.id} track={t} queue={tracks} />)}
        </div>
      )}
    </div>
  )
}
