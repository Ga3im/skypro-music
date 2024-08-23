import s from "@/components/Playlist/Playlist.module.css";
import { TrackType } from "@/types/tracks";
import { Track } from "../Track/Track";

type PlaylistProps = { tracks: TrackType[];
  setCurrentTrack: (track: TrackType) => void;
};

export const Playlist = (
  { tracks, setCurrentTrack }: PlaylistProps
) => {
  return (
    <>
      <div className={s.contentPlaylist}>
        {tracks.map((track) => (
          <Track
            setCurrentTrack={setCurrentTrack}
            key={track._id}
            track={track}
          />
        ))}
      </div>
    </>
  );
};
