"use client";
import s from "@/components/Player/Player.module.css";
import { TrackType } from "@/types/tracks";
import classNames from "classnames";
import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";

type props = {
  currentTrack: TrackType;
};

export const Player = ({ currentTrack }: props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [progress, setProgress] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onPlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value) / 100;
    }
  };

  const onChangeTime = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    setProgress({
      currentTime: e.currentTarget.currentTime,
      duration: e.currentTarget.duration,
    });
  };

  const onRepeat = () => {
    if (repeat) {
      audioRef.current.loop = false;
    } else {
      audioRef.current.loop = true;
    }
    setRepeat(!repeat);
  };

  return (
    <>
      <audio
        onTimeUpdate={onChangeTime}
        ref={audioRef}
        controls
        src={currentTrack.track_file}
      />
      <div className={s.bar}>
        <div className={s.barContent}>
          <div className={s.barPlayerProgress}></div>
          <div className={s.barPlayerBlock}>
            <div className={s.barPlayer}>
              <div className={s.playerControls}>
                <div className={s.playerBtnPrev}>
                  <svg className={s.playerBtnPrevSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                {isPlaying ? (
                  <div onClick={onPlay} className={s.playerBtnPlay}>
                    <svg className={s.playerBtnPlaySvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-pause"></use>
                    </svg>
                  </div>
                ) : (
                  <div onClick={onPlay} className={s.playerBtnPlay}>
                    <svg className={s.playerBtnPlaySvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                )}
                <div className={s.playerBtnNext}>
                  <svg className={s.playerBtnNextSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                
                {repeat ? (
                  <div
                    onClick={onRepeat}
                    className={classNames(s.playerBtnRepeat, s.btnIcon)}
                  >
                    <svg className={s.playerBtnRepeatSvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-activeRepeat"></use>
                    </svg>
                  </div>
                ) : (
                  <div
                    onClick={onRepeat}
                    className={classNames(s.playerBtnRepeat, s.btnIcon)}
                  >
                    <svg className={s.playerBtnRepeatSvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                )}
                <div className={classNames(s.playerBtnShuffle, s.btnIcon)}>
                  <svg className={s.playerBtnShuffleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className={s.playerTrackPlay}>
                <div className={s.trackPlayContain}>
                  <div className={s.trackPlayImage}>
                    <svg className={s.trackPlaySvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={s.trackPlayAuthor}>
                    <a className={s.trackPlayAuthorLink} href="http://">
                      {currentTrack.author}
                    </a>
                  </div>
                  <div className={s.trackPlayAlbum}>
                    <a className={s.trackPlayAlbumLink} href="http://">
                      {currentTrack.name}
                    </a>
                  </div>
                </div>

                <div className={s.trackPlayLikeDis}>
                  <div className={classNames(s.trackPlayLike, s.btnIcon)}>
                    <svg className={s.trackPlayLikeSvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className={classNames(s.trackPlayDislike, s.btnIcon)}>
                    <svg className={s.trackPlayDislikeSvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.barVolumeBlock}>
              <div className={s.volumeContent}>
                <div className={s.volumeImage}>
                  <svg className={s.volumeSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className={s.volumeProgress}>
                  <input
                    onChange={onChangeVolume}
                    className={s.volumeProgressLine}
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
