import s from "@/components/Playlist/Playlist.module.css";
import { Track } from "../Track/Track";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { setIsLike } from "@/store/feautures/tracksSlice";

export const Playlist = () => {
  const dispatch = useAppDispatch();
  const { tracks, myPlaylist, isLike } = useAppSelector(
    (state) => state.tracksSlice
  );
  // useEffect(() => {
  //   tracks.filter((it) => {
  //     myPlaylist.filter((i) => {
  //       if (it._id != i._id) {
  //         dispatch(setIsLike(true));
  //       }
  //     });
  //   });
  // });
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
