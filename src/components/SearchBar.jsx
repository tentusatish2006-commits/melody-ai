export default function SearchBar({ value, onChange, placeholder = "Search songs, artists, albums..." }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
    </div>
  )
}
