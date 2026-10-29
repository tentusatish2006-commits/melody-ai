// Demo catalogue – replace with licensed tracks later.
// Audio URLs are publicly available sample / royalty-free tracks.
// Never add unauthorized full copyrighted songs.

export const languages = [
  "All", "English", "Hindi", "Telugu", "Tamil", "Malayalam",
  "Kannada", "Bengali", "Marathi", "Punjabi", "Gujarati"
];

export const genres = ["Pop", "Classical", "Folk", "Rock", "Electronic", "Devotional", "Film"];
export const moods = ["Happy", "Romantic", "Energetic", "Calm", "Melancholy", "Party"];

export const sampleTracks = [
  {
    id: "1",
    title: "Sunrise Melody",
    artist: "Demo Artist",
    singers: ["Demo Singer"],
    album: "Morning Light",
    movie: null,
    language: "English",
    genre: "Pop",
    mood: "Happy",
    duration: 185,
    artwork: "https://picsum.photos/seed/sunrise/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    downloadAllowed: true,
    lyrics: null
  },
  {
    id: "2",
    title: "Quiet Rain",
    artist: "Ambient Collective",
    singers: ["Ambient Collective"],
    album: "Rain Sessions",
    movie: null,
    language: "English",
    genre: "Electronic",
    mood: "Calm",
    duration: 210,
    artwork: "https://picsum.photos/seed/rain/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    downloadAllowed: true,
    lyrics: null
  },
  {
    id: "3",
    title: "Folk Journey",
    artist: "Heritage Band",
    singers: ["Heritage Band"],
    album: "Roots",
    movie: null,
    language: "Hindi",
    genre: "Folk",
    mood: "Calm",
    duration: 198,
    artwork: "https://picsum.photos/seed/folk/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    downloadAllowed: false,
    lyrics: null
  },
  {
    id: "4",
    title: "City Lights",
    artist: "Night Drive",
    singers: ["Night Drive"],
    album: "Neon Nights",
    movie: null,
    language: "English",
    genre: "Electronic",
    mood: "Energetic",
    duration: 240,
    artwork: "https://picsum.photos/seed/city/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    downloadAllowed: true,
    lyrics: null
  },
  {
    id: "5",
    title: "Temple Bells",
    artist: "Classical Ensemble",
    singers: ["Classical Ensemble"],
    album: "Devotion",
    movie: null,
    language: "Tamil",
    genre: "Devotional",
    mood: "Calm",
    duration: 175,
    artwork: "https://picsum.photos/seed/temple/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    downloadAllowed: false,
    lyrics: null
  },
  {
    id: "6",
    title: "Monsoon Dance",
    artist: "Rhythm Project",
    singers: ["Rhythm Project"],
    album: "Seasons",
    movie: "Sample Film",
    language: "Telugu",
    genre: "Film",
    mood: "Happy",
    duration: 220,
    artwork: "https://picsum.photos/seed/monsoon/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    downloadAllowed: true,
    lyrics: null
  },
  {
    id: "7",
    title: "Soft Piano",
    artist: "Solo Piano",
    singers: ["Solo Piano"],
    album: "Quiet Hours",
    movie: null,
    language: "English",
    genre: "Classical",
    mood: "Calm",
    duration: 195,
    artwork: "https://picsum.photos/seed/piano/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    downloadAllowed: true,
    lyrics: null
  },
  {
    id: "8",
    title: "Festival Beat",
    artist: "Party Crew",
    singers: ["Party Crew"],
    album: "Celebration",
    movie: null,
    language: "Punjabi",
    genre: "Pop",
    mood: "Party",
    duration: 205,
    artwork: "https://picsum.photos/seed/festival/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    downloadAllowed: false,
    lyrics: null
  },
  {
    id: "9",
    title: "Ocean Waves",
    artist: "Ambient Collective",
    singers: ["Ambient Collective"],
    album: "Nature Sounds",
    movie: null,
    language: "English",
    genre: "Electronic",
    mood: "Calm",
    duration: 230,
    artwork: "https://picsum.photos/seed/ocean/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    downloadAllowed: true,
    lyrics: null
  },
  {
    id: "10",
    title: "Desert Wind",
    artist: "World Ensemble",
    singers: ["World Ensemble"],
    album: "Horizons",
    movie: null,
    language: "Hindi",
    genre: "Folk",
    mood: "Melancholy",
    duration: 188,
    artwork: "https://picsum.photos/seed/desert/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    downloadAllowed: true,
    lyrics: null
  },
  {
    id: "11",
    title: "Night Drive",
    artist: "Synthwave",
    singers: ["Synthwave"],
    album: "Retro Future",
    movie: null,
    language: "English",
    genre: "Electronic",
    mood: "Energetic",
    duration: 215,
    artwork: "https://picsum.photos/seed/night/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    downloadAllowed: true,
    lyrics: null
  },
  {
    id: "12",
    title: "Mountain Song",
    artist: "Folk Collective",
    singers: ["Folk Collective"],
    album: "Peaks",
    movie: null,
    language: "Malayalam",
    genre: "Folk",
    mood: "Calm",
    duration: 192,
    artwork: "https://picsum.photos/seed/mountain/400/400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    downloadAllowed: false,
    lyrics: null
  }
];

export const samplePlaylists = [
  { id: "p1", name: "Morning Vibes", trackIds: ["1", "7", "2", "9"] },
  { id: "p2", name: "Focus Flow", trackIds: ["2", "5", "7", "9"] },
  { id: "p3", name: "Party Starters", trackIds: ["4", "8", "6", "11"] },
  { id: "p4", name: "Chill Evenings", trackIds: ["2", "3", "10", "12"] }
];

export const sampleArtists = [
  { id: "a1", name: "Demo Artist", image: "https://picsum.photos/seed/artist1/300/300" },
  { id: "a2", name: "Ambient Collective", image: "https://picsum.photos/seed/artist2/300/300" },
  { id: "a3", name: "Heritage Band", image: "https://picsum.photos/seed/artist3/300/300" },
  { id: "a4", name: "Night Drive", image: "https://picsum.photos/seed/artist4/300/300" },
  { id: "a5", name: "Rhythm Project", image: "https://picsum.photos/seed/artist5/300/300" }
];
