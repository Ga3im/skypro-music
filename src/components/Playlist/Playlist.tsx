import s from "@/components/Playlist/Playlist.module.css";
import { Track } from "../Track/Track";
import { useAppSelector } from "@/store/store";
import { TrackType } from "@/types/tracks";

export const Playlist = () => {
  const { tracks, myPlaylist, isLike } = useAppSelector((state) => state.tracksSlice);
  return (
    <>
      <div className={s.contentPlaylist}>
     
       { tracks.map((track) => (
          <Track key={track._id} track={track} />
        ))}
      </div>
    </>
  );
};
