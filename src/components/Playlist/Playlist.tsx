import s from "@/components/Playlist/Playlist.module.css";
import { Track } from "../Track/Track";
import {  useAppSelector } from "@/store/store";
import React from "react";

export const Playlist =() => {
  const { filteredTracks } = useAppSelector((state) => state.tracksSlice);
 
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
