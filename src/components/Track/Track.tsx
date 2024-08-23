import { TrackType } from "@/types/tracks";
import s from './Track.module.css';

type TrackProps = { track: TrackType ;
  setCurrentTrack: (track: TrackType) => void
}


export const Track = ( { track, setCurrentTrack }: TrackProps) => {
  let minutes: number = Math.floor( track.duration_in_seconds / 60);
  let seconds: number = track.duration_in_seconds % 60;

  const playTrack = ()=>{
    setCurrentTrack(track)
  }
  return (
    <div onClick={playTrack} key={track._id} className={s.playlistItem}>
      <div className={s.playlistTrack}>
        <div className={s.trackTitle}>
          <div className={s.trackTitleImage}>
            <svg className={s.trackTitleSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-note"></use>
            </svg>
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
          <svg className={s.trackTimeSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={s.trackTimeText}>{minutes}:{seconds.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};
