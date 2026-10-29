import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      {/* Desktop sidebar */}
      <nav className="nav-desktop">
        <div className="logo">Melody AI</div>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/language">Languages</NavLink>
        <NavLink to="/admin">Admin (Demo)</NavLink>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="nav-mobile">
        <NavLink to="/" end>
          <span>🏠</span>
          Home
        </NavLink>
        <NavLink to="/search">
          <span>🔍</span>
          Search
        </NavLink>
        <NavLink to="/library">
          <span>📚</span>
          Library
        </NavLink>
        <NavLink to="/language">
          <span>🌐</span>
          Lang
        </NavLink>
      </nav>
    </>
  )
}
