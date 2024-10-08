import { useAppDispatch, useAppSelector } from "@/store/store";
import s from "./Track.module.css";
import { TrackType } from "@/types/tracks";
import {
  setAddLike,
  setDislikeTrack,
  setFavoriteTracks,
  setPlay,
  setThisTrack,
} from "@/store/feautures/tracksSlice";
import { MouseEvent, useEffect, useState } from "react";
import { deleteTrack, getFavoriteTracks, likeTrack } from "@/api/api";

export const Track = ({ track }: { track: TrackType }) => {
  const [isLike, setIsLike] = useState<boolean>();
  let minutes: number = Math.floor(track.duration_in_seconds / 60);
  let seconds: number = track.duration_in_seconds % 60;

  const dispatch = useAppDispatch();
  let { isPlaying, thisTrack, myPlaylist } = useAppSelector(
    (state) => state.tracksSlice
  );
  const { token, authState } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setIsLike(myPlaylist.some((favTrack) => favTrack._id === track._id));
  }, []);
  
  const playTrack = (track: TrackType) => {
    dispatch(setThisTrack(track));
    if (isPlaying) {
      dispatch(setPlay((isPlaying = false)));
    } else {
      dispatch(setPlay((isPlaying = true)));
    }
  };

  const likeMusic = (e: MouseEvent<SVGElement>) => {
    e.preventDefault();
    if (authState) {
    let trackId: number = thisTrack?._id;
    let access: string | any = token?.access;
    dispatch(setThisTrack(track));
    if (isLike) {
      deleteTrack(trackId, access);
      setIsLike(false);
      dispatch(setDislikeTrack(myPlaylist));
    } else {
      likeTrack(trackId, access);
      dispatch(setAddLike(myPlaylist));
      setIsLike(true);
    }
  }
  };

  return (
    <div
      onClick={() => playTrack(track)}
      key={track._id}
      className={s.playlistItem}
    >
      <div className={s.playlistTrack}>
        <div className={s.trackTitle}>
          <div className={s.trackTitleImage}>
            {track._id === thisTrack?._id ? (
              isPlaying ? (
                <div className={s.playingDot}></div>
              ) : (
                <div className={s.trackPlay}></div>
              )
            ) : (
              <svg className={s.trackTitleSvg}>
                <use xlinkHref="/icon/sprite.svg#icon-note"></use>
              </svg>
            )}
          </div>
          <div className="track__title-text">
            <a className={s.trackTitleLink} href="http://">
              {track.name} <span className={s.trackTitleSpan}></span>
            </a>
          </div>
        </div>
        <div className={s.trackAuthor}>
          <a className={s.trackAuthorLink} href="http://">
            {track.author}
          </a>
        </div>
        <div className={s.trackAlbum}>
          <a className={s.trackAlbumLink} href="http://">
            {track.album}
          </a>
        </div>
        <div className="track__time">
          {isLike ? (
            <svg onClick={likeMusic} className={s.trackTimeSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-active-like"></use>
            </svg>
          ) : (
            <svg onClick={likeMusic} className={s.trackTimeSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-like"></use>
            </svg>
          )}
          <span className={s.trackTimeText}>
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};
