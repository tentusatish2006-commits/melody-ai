import { useState } from 'react'
import { usePlayer } from '../context/PlayerContext'
import { sampleTracks } from '../data/sampleTracks'

export default function AIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I can help you find songs by mood, language, or genre. Try “play calm Telugu songs” or “happy English tracks”.' }
  ])
  const [input, setInput] = useState('')
  const { playTrack } = usePlayer()

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setInput('')

    // Simple rule-based demo (no real AI key required)
    setTimeout(() => {
      const lower = userMsg.toLowerCase()
      let reply = "I found some tracks for you."
      let matches = [...sampleTracks]

      if (lower.includes('calm') || lower.includes('relax') || lower.includes('peaceful') || lower.includes('chill')) {
        matches = matches.filter(t => t.mood === 'Calm')
      } else if (lower.includes('happy') || lower.includes('upbeat') || lower.includes('joy')) {
        matches = matches.filter(t => t.mood === 'Happy' || t.mood === 'Energetic')
      } else if (lower.includes('party') || lower.includes('dance')) {
        matches = matches.filter(t => t.mood === 'Party' || t.mood === 'Energetic')
      } else if (lower.includes('sad') || lower.includes('melancholy')) {
        matches = matches.filter(t => t.mood === 'Melancholy')
      }

      if (lower.includes('telugu')) matches = matches.filter(t => t.language === 'Telugu')
      if (lower.includes('hindi')) matches = matches.filter(t => t.language === 'Hindi')
      if (lower.includes('tamil')) matches = matches.filter(t => t.language === 'Tamil')
      if (lower.includes('english')) matches = matches.filter(t => t.language === 'English')
      if (lower.includes('punjabi')) matches = matches.filter(t => t.language === 'Punjabi')
      if (lower.includes('malayalam')) matches = matches.filter(t => t.language === 'Malayalam')

      if (lower.includes('folk')) matches = matches.filter(t => t.genre === 'Folk')
      if (lower.includes('electronic') || lower.includes('edm')) matches = matches.filter(t => t.genre === 'Electronic')
      if (lower.includes('classical')) matches = matches.filter(t => t.genre === 'Classical')
      if (lower.includes('devotional')) matches = matches.filter(t => t.genre === 'Devotional')

      if (matches.length === 0) {
        reply = "No exact matches in the demo catalogue. Try another mood or language (e.g. calm English, party Punjabi)."
        matches = sampleTracks
      } else {
        playTrack(matches[0], matches)
        reply = `Playing “${matches[0].title}” by ${matches[0].artist} and ${matches.length - 1} similar tracks.`
      }

      setMessages(prev => [...prev, { role: 'assistant', text: reply }])
    }, 500)
  }

  return (
    <>
      <button className="ai-fab" onClick={() => setOpen(!open)} aria-label="AI Assistant">
        ✨
      </button>

      {open && (
        <div className="ai-panel">
          <div style={{
            padding: '12px 16px',
            borderBottom: '1px solid var(--border)',
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>Melody AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.2rem' }}
            >
              ✕
            </button>
          </div>
          <div className="ai-messages">
            {messages.map((m, i) => (
              <div key={i} style={{
                marginBottom: 12,
                textAlign: m.role === 'user' ? 'right' : 'left'
              }}>
                <span style={{
                  display: 'inline-block',
                  background: m.role === 'user' ? 'var(--accent)' : 'var(--bg-card)',
                  color: m.role === 'user' ? '#000' : 'var(--text)',
                  padding: '8px 12px',
                  borderRadius: 12,
                  maxWidth: '85%',
                  fontSize: '0.9rem',
                  lineHeight: 1.4
                }}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="ai-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask for songs..."
            />
            <button className="btn" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}
