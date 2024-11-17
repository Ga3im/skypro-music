"use client";
import s from "@/components/Player/Player.module.css";
import { TrackType } from "@/types/tracks";
import classNames from "classnames";
import {
  ChangeEvent,
  MouseEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  setAddLike,
  setIsShuffle,
  setNextTrack,
  setPlay,
  setPrevTrack,
  setShuffle,
} from "@/store/feautures/tracksSlice";
import { deleteTrack, likeTrack } from "@/api/api";

type props = {
  thisTrack: TrackType;
};

export const Player = ({ thisTrack }: props) => {
  const [ isLike, setIsLike] = useState<boolean>()
  const dispatch = useAppDispatch();
  let { isShuffle, isPlaying, myPlaylist, tracks } = useAppSelector(
    (state) => state.tracksSlice
  );
  const { token, authState } = useAppSelector((state) => state.auth);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [progress, setProgress] = useState({
    currentTime: 0,
    duration: 0,
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    dispatch(setPlay(!isPlaying));
  };

  const handleCanPlay = () => {
    audioRef.current?.play();
    dispatch(setPlay(true));
  };

  const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value) / 100;
    }
  };

  const onChangeTime = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    setProgress({
      currentTime: e.currentTarget.currentTime,
      duration: e.currentTarget.duration || 0,
    });
  };

  const onRepeat = () => {
    const audio  = audioRef.current;
    let loopAudio = audio?.loop
    if (repeat) {
      loopAudio = false;
    } else {
      loopAudio = true;
    }
    setRepeat(!repeat);
  };

  const NextTrack = () => {
    dispatch(setNextTrack());
    dispatch(setPlay((isPlaying = true)));
  };

  const PrevTrack = () => {
    dispatch(setPrevTrack());
  };

  const progressBar = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  const toggleShaffle = () => {
    dispatch(setIsShuffle(!isShuffle));
    dispatch(setShuffle());
  };

  const likeMusic = (e: MouseEvent<HTMLDivElement>) => {
    if (authState) {
      e.preventDefault();
      let trackId: number = thisTrack?._id;
      let access: string = token?.access ?? '';
      if (myPlaylist.some((i)=> i._id === thisTrack._id)) {
        deleteTrack(trackId, access);
        setIsLike(false);
        dispatch(setAddLike(thisTrack));
      } else {
        likeTrack(trackId, access);
        setIsLike(true);
        dispatch(setAddLike(thisTrack));
      }
    }
  };

  let minutes = Math.floor(progress.duration / 60);
  let seconds = Math.floor(progress.duration % 60);

  useEffect(() => {
    setIsLike(myPlaylist.some((favTrack) => favTrack._id === thisTrack._id));
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);
  return (
    <>
      <audio
        className={s.displayNone}
        onCanPlay={handleCanPlay}
        onTimeUpdate={onChangeTime}
        ref={audioRef}
        controls
        src={thisTrack.track_file}
        onEnded={NextTrack}
      />
      <div className={s.bar}>
        <div className={s.barContent}>
          <ProgressBar
            max={progress.duration}
            value={progress.currentTime}
            onChange={progressBar}
          />
          <div className={s.barPlayerBlock}>
            <div>
              <div className={s.barPlayer}>
                <div className={s.playerControls}>
                  <div onClick={PrevTrack} className={s.playerBtnPrev}>
                    <svg className={s.playerBtnPrevSvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  {isPlaying ? (
                    <div onClick={handlePlay} className={s.playerBtnPlay}>
                      <svg className={s.playerBtnPlaySvg}>
                        <use xlinkHref="/icon/sprite.svg#icon-pause"></use>
                      </svg>
                    </div>
                  ) : (
                    <div onClick={handlePlay} className={s.playerBtnPlay}>
                      <svg className={s.playerBtnPlaySvg}>
                        <use xlinkHref="/icon/sprite.svg#icon-play"></use>
                      </svg>
                    </div>
                  )}
                  <div onClick={NextTrack} className={s.playerBtnNext}>
                    <svg className={s.playerBtnNextSvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>

                  {repeat ? (
                    <div
                      onClick={onRepeat}
                      className={classNames(s.playerBtnRepeat, s.btnIcon)}
                    >
                      <svg className={s.playerBtnRepeatSvgActive}>
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

                  {isShuffle ? (
                    <div
                      onClick={toggleShaffle}
                      className={classNames(s.playerBtnShuffle, s.btnIcon)}
                    >
                      <svg className={s.playerBtnShuffleSvg}>
                        <use xlinkHref="/icon/sprite.svg#icon-shuffleActive"></use>
                      </svg>
                    </div>
                  ) : (
                    <div
                      onClick={toggleShaffle}
                      className={classNames(s.playerBtnShuffle, s.btnIcon)}
                    >
                      <svg className={s.playerBtnShuffleSvg}>
                        <use xlinkHref="/icon/sprite.svg#icon-shuffle"></use>
                      </svg>
                    </div>
                  )}
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
                        {thisTrack.author}
                      </a>
                    </div>
                    <div className={s.trackPlayAlbum}>
                      <a className={s.trackPlayAlbumLink} href="http://">
                        {thisTrack.name}
                      </a>
                    </div>
                  </div>

                  <div className={s.trackPlayLikeDis}>
                    <div
                      onClick={likeMusic}
                      className={classNames(s.trackPlayLike, s.btnIcon)}
                    >
                      {myPlaylist.some((favTrack) => favTrack._id === thisTrack._id) ? (
                        <svg className={s.trackPlayLikeSvg}>
                          <use xlinkHref="/icon/sprite.svg#icon-active-like"></use>
                        </svg>
                      ) : (
                        <svg className={s.trackPlayLikeSvg}>
                          <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.timeAndVolume}>
              <div className={s.trackTime}>
                <p>
                  {Math.floor(progress.currentTime / 60)}:
                  {Math.floor(progress.currentTime % 60)
                    .toString()
                    .padStart(2, "0")}{" "}
                  /
                </p>
                <p className={s.beforeTime}>
                  {minutes}:{seconds.toString().padStart(2, "0")}
                </p>
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
      </div>
    </>
  );
};
