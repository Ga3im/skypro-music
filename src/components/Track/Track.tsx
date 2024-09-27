import { useAppDispatch, useAppSelector } from "@/store/store";
import s from "./Track.module.css";
import { TrackType } from "@/types/tracks";
import { setPlay, setThisTrack } from "@/store/feautures/tracksSlice";
import { MouseEvent } from "react";
import { likeTrack } from "@/api/api";

export const Track = ({ track }: { track: TrackType }) => {
  let minutes: number = Math.floor(track.duration_in_seconds / 60);
  let seconds: number = track.duration_in_seconds % 60;

  const dispatch = useAppDispatch();
  let { isPlaying, myPlaylist, tracks, thisTrack } = useAppSelector(
    (state) => state.tracksSlice
  );
  const { token } = useAppSelector((state) => state.auth);

  const playTrack = (track: TrackType) => {
    dispatch(setThisTrack(track));
    if (isPlaying) {
      dispatch(setPlay((isPlaying = false)));
    } else {
      dispatch(setPlay((isPlaying = true)));
    }
  };
  const likeMusic = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    let trackId = thisTrack?._id;
    let access = token?.access;
    if (trackId && access) {
      likeTrack(trackId, access);
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
          <svg onClick={likeMusic} className={s.trackTimeSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-like"></use>
          </svg>

          <span className={s.trackTimeText}>
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};
