import { useState } from 'react'
import { sampleTracks } from '../data/sampleTracks'
import TrackCard from '../components/TrackCard'
import { usePlayer } from '../context/PlayerContext'

export default function Library() {
  const {
    favourites, recentlyPlayed, customPlaylists,
    createPlaylist, playTrack
  } = usePlayer()
  const [newName, setNewName] = useState('')

  const favTracks = sampleTracks.filter(t => favourites.includes(t.id))

  const handleCreate = () => {
    if (!newName.trim()) return
    createPlaylist(newName.trim())
    setNewName('')
  }

  return (
    <div>
      <h1 className="section-title" style={{ marginTop: 0 }}>Your Library</h1>

      <h2 className="section-title">Favourites</h2>
      {favTracks.length === 0 ? (
        <p className="text-secondary">No favourites yet. Open a track and tap ♡ Favourite.</p>
      ) : (
        <div className="card-grid">
          {favTracks.map(t => <TrackCard key={t.id} track={t} queue={favTracks} />)}
        </div>
      )}

      <h2 className="section-title">Recently Played</h2>
      {recentlyPlayed.length === 0 ? (
        <p className="text-secondary">Play something to see it here.</p>
      ) : (
        <div className="card-grid">
          {recentlyPlayed.slice(0, 12).map(t => (
            <TrackCard key={t.id} track={t} queue={recentlyPlayed} />
          ))}
        </div>
      )}

      <h2 className="section-title">Your Playlists</h2>
      <div className="flex gap-2 mb-2" style={{ flexWrap: 'wrap' }}>
        <input
          value={newName}
          onChange={e => setNewName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleCreate()}
          placeholder="New playlist name"
          style={{
            flex: 1,
            minWidth: 160,
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '10px 14px',
            color: 'var(--text)',
            fontSize: '0.95rem'
          }}
        />
        <button className="btn" onClick={handleCreate}>Create</button>
      </div>

      {customPlaylists.length === 0 ? (
        <p className="text-secondary">No custom playlists yet.</p>
      ) : (
        <div className="card-grid">
          {customPlaylists.map(p => {
            const tracks = sampleTracks.filter(t => p.trackIds.includes(t.id))
            return (
              <div
                key={p.id}
                className="track-card"
                onClick={() => tracks[0] && playTrack(tracks[0], tracks)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={tracks[0]?.artwork || 'https://picsum.photos/seed/playlist/400/400'}
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
      )}
    </div>
  )
}
