import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import MiniPlayer from './components/MiniPlayer'
import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'
import Language from './pages/Language'
import Artist from './pages/Artist'
import Album from './pages/Album'
import Movie from './pages/Movie'
import Admin from './pages/Admin'
import AIChat from './components/AIChat'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/language" element={<Language />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/album/:name" element={<Album />} />
          <Route path="/movie/:name" element={<Movie />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <MiniPlayer />
      <AIChat />
    </div>
  )
}

export default App
