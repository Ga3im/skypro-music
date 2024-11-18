import s from "@/components/Playlist/Playlist.module.css";
import { Track } from "../Track/Track";
import {  useAppSelector } from "@/store/store";
import React, { useMemo } from "react";

export const Playlist = React.memo(() => {
  const { tracks } = useAppSelector((state) => state.tracksSlice);

  const filteredTracks = useMemo(()=>{
    return tracks
  }, [tracks])
 
  return (
    <>
      <div className={s.contentPlaylist}>
        {filteredTracks.map((track) => (
          <Track key={track._id} track={track} />
        ))}
      </div>
    </>
  );
}
)