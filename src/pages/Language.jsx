import { languages, sampleTracks } from '../data/sampleTracks'
import TrackCard from '../components/TrackCard'
import { useState } from 'react'

export default function Language() {
  const [selected, setSelected] = useState('All')

  const tracks = selected === 'All'
    ? sampleTracks
    : sampleTracks.filter(t => t.language === selected)

  return (
    <div>
      <h1 className="section-title" style={{ marginTop: 0 }}>Browse by Language</h1>
      <div className="filters">
        {languages.map(l => (
          <button
            key={l}
            className={`filter-chip ${selected === l ? 'active' : ''}`}
            onClick={() => setSelected(l)}
          >
            {l}
          </button>
        ))}
      </div>

      {tracks.length === 0 ? (
        <div className="empty-state">No tracks in this language in the demo catalogue.</div>
      ) : (
        <>
          <p className="text-secondary mb-2">{tracks.length} track{tracks.length !== 1 ? 's' : ''}</p>
          <div className="card-grid">
            {tracks.map(t => <TrackCard key={t.id} track={t} queue={tracks} />)}
          </div>
        </>
      )}
    </div>
  )
}
