import s from "@/components/Playlist/Playlist.module.css";
import { Track } from "../Track/Track";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import {  setIsLike, setLikerdTracks } from "@/store/feautures/tracksSlice";
import { getFavoriteTracks } from "@/api/api";

export const Playlist = () => {
  const dispatch = useAppDispatch();
  const { tracks, myPlaylist, isLike, likedTracks } = useAppSelector(
    (state) => state.tracksSlice
  );
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const getData = async () => {
      try {
        if (token?.access) {
          const res = await getFavoriteTracks(token.access);
          dispatch(setLikerdTracks(res));
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    };
    getData();
  }, []);

  useEffect(()=>{
    tracks.map((i)=>{
      likedTracks.map((item)=>{
        if (i._id === item._id) {
          dispatch(setIsLike(true))
        }
      })
    })
  },[])
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
