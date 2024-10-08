import s from "@/components/Playlist/Playlist.module.css";
import { Track } from "../Track/Track";
import { useAppSelector } from "@/store/store";

export const Playlist = () => {
  const { tracks } = useAppSelector(state => state.tracksSlice)
  return (
    <>
      <div className={s.contentPlaylist}>
        {tracks.map((track) => (
          <Track
            key={track._id}
            track={track}
          />
        ))}
      </div>
    </>
  );
};
