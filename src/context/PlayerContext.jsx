import { createContext, useContext, useState, useRef, useEffect } from 'react';

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState('off');
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('melody_favourites') || '[]');
    } catch {
      return [];
    }
  });
  const [recentlyPlayed, setRecentlyPlayed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('melody_recent') || '[]');
    } catch {
      return [];
    }
  });
  const [customPlaylists, setCustomPlaylists] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('melody_playlists') || '[]');
    } catch {
      return [];
    }
  });

  const audioRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('melody_favourites', JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem('melody_recent', JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  useEffect(() => {
    localStorage.setItem('melody_playlists', JSON.stringify(customPlaylists));
  }, [customPlaylists]);

  const playTrack = (track, newQueue = null) => {
    if (newQueue && newQueue.length > 0) {
      setQueue(newQueue);
      const idx = newQueue.findIndex(t => t.id === track.id);
      setQueueIndex(idx >= 0 ? idx : 0);
    } else if (queue.length === 0) {
      setQueue([track]);
      setQueueIndex(0);
    }

    setCurrentTrack(track);
    setIsPlaying(true);

    setRecentlyPlayed(prev => {
      const filtered = prev.filter(t => t.id !== track.id);
      return [track, ...filtered].slice(0, 30);
    });
  };

  const togglePlay = () => {
    if (!currentTrack) return;
    setIsPlaying(prev => !prev);
  };

  const nextTrack = () => {
    if (queue.length === 0) return;
    let nextIdx;
    if (shuffle) {
      nextIdx = Math.floor(Math.random() * queue.length);
    } else {
      nextIdx = (queueIndex + 1) % queue.length;
    }
    if (repeat === 'one') nextIdx = queueIndex;
    setQueueIndex(nextIdx);
    setCurrentTrack(queue[nextIdx]);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    if (queue.length === 0) return;
    if (progress > 3) {
      if (audioRef.current) audioRef.current.currentTime = 0;
      setProgress(0);
      return;
    }
    const prevIdx = (queueIndex - 1 + queue.length) % queue.length;
    setQueueIndex(prevIdx);
    setCurrentTrack(queue[prevIdx]);
    setIsPlaying(true);
  };

  const seek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const toggleFavourite = (trackId) => {
    setFavourites(prev =>
      prev.includes(trackId)
        ? prev.filter(id => id !== trackId)
        : [...prev, trackId]
    );
  };

  const addToPlaylist = (playlistId, trackId) => {
    setCustomPlaylists(prev =>
      prev.map(p =>
        p.id === playlistId
          ? { ...p, trackIds: [...new Set([...p.trackIds, trackId])] }
          : p
      )
    );
  };

  const createPlaylist = (name) => {
    const newPl = {
      id: 'cp_' + Date.now(),
      name,
      trackIds: []
    };
    setCustomPlaylists(prev => [...prev, newPl]);
    return newPl;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    if (audio.src !== currentTrack.audioUrl) {
      audio.src = currentTrack.audioUrl;
      audio.load();
    }
    audio.volume = volume;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setIsPlaying(false));
      }
    } else {
      audio.pause();
    }
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      if (repeat === 'one') {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        nextTrack();
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('ended', onEnded);
    };
  }, [queue, queueIndex, repeat, shuffle]);

  const value = {
    currentTrack,
    isPlaying,
    queue,
    progress,
    duration,
    volume,
    shuffle,
    repeat,
    favourites,
    recentlyPlayed,
    customPlaylists,
    audioRef,
    playTrack,
    togglePlay,
    nextTrack,
    prevTrack,
    seek,
    setVolume,
    setShuffle,
    setRepeat,
    toggleFavourite,
    addToPlaylist,
    createPlaylist,
    setQueue
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
      <audio ref={audioRef} preload="metadata" />
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
