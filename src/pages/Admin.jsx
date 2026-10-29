export default function Admin() {
  return (
    <div>
      <h1 className="section-title" style={{ marginTop: 0 }}>Admin Dashboard (Demo)</h1>
      <p className="text-secondary" style={{ maxWidth: 620, lineHeight: 1.65 }}>
        This is a placeholder page. In a production version you would protect this route
        with authentication and provide forms to manage the catalogue.
      </p>

      <div style={{
        marginTop: 24,
        background: 'var(--bg-card)',
        borderRadius: 12,
        padding: 20,
        maxWidth: 620
      }}>
        <h3 style={{ marginBottom: 12 }}>What a real admin would include</h3>
        <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <li>Login required (Supabase Auth or similar)</li>
          <li>Forms to add / edit track metadata, artwork URL, audio URL</li>
          <li>Upload artwork and audio files to secure storage</li>
          <li>Toggle <code>downloadAllowed</code> only for tracks you legally own or license</li>
          <li>Never scrape or host unauthorized copyrighted material</li>
        </ul>
      </div>

      <p style={{ marginTop: 28, color: 'var(--text-secondary)' }}>
        For the current demo, edit <code>src/data/sampleTracks.js</code> to add or change tracks.
      </p>
    </div>
  )
}
