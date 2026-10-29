import { useState, useMemo } from 'react'
import { sampleTracks, languages, genres, moods } from '../data/sampleTracks'
import SearchBar from '../components/SearchBar'
import TrackCard from '../components/TrackCard'

export default function Search() {
  const [query, setQuery] = useState('')
  const [lang, setLang] = useState('All')
  const [genre, setGenre] = useState('All')
  const [mood, setMood] = useState('All')

  const filtered = useMemo(() => {
    return sampleTracks.filter(t => {
      const q = query.toLowerCase()
      const matchQ = !q ||
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q) ||
        (t.album && t.album.toLowerCase().includes(q)) ||
        (t.movie && t.movie.toLowerCase().includes(q)) ||
        (t.singers && t.singers.some(s => s.toLowerCase().includes(q)))
      const matchLang = lang === 'All' || t.language === lang
      const matchGenre = genre === 'All' || t.genre === genre
      const matchMood = mood === 'All' || t.mood === mood
      return matchQ && matchLang && matchGenre && matchMood
    })
  }, [query, lang, genre, mood])

  return (
    <div>
      <h1 className="section-title" style={{ marginTop: 0 }}>Search</h1>
      <SearchBar value={query} onChange={setQuery} />

      <div className="filters">
        <select
          className="filter-chip"
          value={lang}
          onChange={e => setLang(e.target.value)}
          aria-label="Filter by language"
        >
          {languages.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <select
          className="filter-chip"
          value={genre}
          onChange={e => setGenre(e.target.value)}
          aria-label="Filter by genre"
        >
          <option value="All">All Genres</option>
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <select
          className="filter-chip"
          value={mood}
          onChange={e => setMood(e.target.value)}
          aria-label="Filter by mood"
        >
          <option value="All">All Moods</option>
          {moods.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">No tracks match your filters. Try different keywords or clear filters.</div>
      ) : (
        <>
          <p className="text-secondary mb-2">{filtered.length} track{filtered.length !== 1 ? 's' : ''} found</p>
          <div className="card-grid">
            {filtered.map(t => (
              <TrackCard key={t.id} track={t} queue={filtered} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
