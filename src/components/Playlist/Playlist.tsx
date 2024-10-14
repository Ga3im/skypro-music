import s from "@/components/Playlist/Playlist.module.css";
import { Track } from "../Track/Track";
import { useAppDispatch, useAppSelector } from "@/store/store";

export const Playlist = () => {
  const { tracks } = useAppSelector((state) => state.tracksSlice);
  const dispatch = useAppDispatch();
 
  return (
    <>
      <div className={s.contentPlaylist}>
        {tracks.map((track) => (
          <Track key={track._id} track={track} />
        ))}
      </div>
    </>
  );
};
