import s from "@/components/Playlist/Playlist.module.css";
import { TrackType } from "@/types/tracks";
import { Track } from "../Track/Track";
import { useAppSelector } from "@/store/store";

type PlaylistProps = {
  setCurrentTrack: (track: TrackType) => void;
};

export const Playlist = (
  { setCurrentTrack }: PlaylistProps
) => {
  const { tracks } = useAppSelector(state => state.tracksSlice)
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
