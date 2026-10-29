import { sampleTracks, samplePlaylists, sampleArtists } from '../data/sampleTracks'
import TrackCard from '../components/TrackCard'
import { usePlayer } from '../context/PlayerContext'
import { Link } from 'react-router-dom'

export default function Home() {
  const { playTrack } = usePlayer()
  const trending = sampleTracks.slice(0, 6)
  const newReleases = [...sampleTracks].reverse().slice(0, 6)

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Good day</h1>
      <p className="text-secondary mb-2">Discover music • Demo catalogue (royalty-free samples)</p>

      <h2 className="section-title">Trending</h2>
      <div className="card-grid">
        {trending.map(t => (
          <TrackCard key={t.id} track={t} queue={trending} />
        ))}
      </div>

      <h2 className="section-title">New Releases</h2>
      <div className="card-grid">
        {newReleases.map(t => (
          <TrackCard key={t.id} track={t} queue={newReleases} />
        ))}
      </div>

      <h2 className="section-title">Popular Artists</h2>
      <div className="card-grid">
        {sampleArtists.map(a => (
          <Link
            key={a.id}
            to={`/artist/${a.id}`}
            className="track-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src={a.image} alt={a.name} style={{ borderRadius: '50%' }} />
            <div className="info">
              <div className="title">{a.name}</div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="section-title">Featured Playlists</h2>
      <div className="card-grid">
        {samplePlaylists.map(p => {
          const tracks = sampleTracks.filter(t => p.trackIds.includes(t.id))
          return (
            <div
              key={p.id}
              className="track-card"
              onClick={() => tracks.length && playTrack(tracks[0], tracks)}
              role="button"
              tabIndex={0}
            >
              <img
                src={tracks[0]?.artwork || 'https://picsum.photos/seed/pl/400/400'}
                alt={p.name}
              />
              <div className="info">
                <div className="title">{p.name}</div>
                <div className="subtitle">{tracks.length} tracks</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
