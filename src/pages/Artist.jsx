import { useParams, Link } from 'react-router-dom'
import { sampleTracks, sampleArtists } from '../data/sampleTracks'
import TrackCard from '../components/TrackCard'

export default function Artist() {
  const { id } = useParams()
  const artist = sampleArtists.find(a => a.id === id)
  const tracks = sampleTracks.filter(t =>
    t.artist === artist?.name || (t.singers && t.singers.includes(artist?.name))
  )

  if (!artist) {
    return (
      <div className="empty-state">
        <p>Artist not found</p>
        <Link to="/" className="btn" style={{ marginTop: 16, display: 'inline-block' }}>Go Home</Link>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
        <img
          src={artist.image}
          alt=""
          style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover' }}
        />
        <div>
          <h1 style={{ fontSize: '1.6rem' }}>{artist.name}</h1>
          <p className="text-secondary">{tracks.length} tracks in demo</p>
        </div>
      </div>
      <div className="card-grid">
        {tracks.map(t => <TrackCard key={t.id} track={t} queue={tracks} />)}
      </div>
    </div>
  )
}
