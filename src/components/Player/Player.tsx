import s from "@/components/Player/Player.module.css"
export const Player = ()=>{
    return(
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
                <div className={s.playerBtnPlay}>
                  <svg className={s.playerBtnPlaySvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className={s.playerBtnNext}>
                  <svg className={s.playerBtnNextSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={s.playerBtnRepeat}>
                  <svg className={s.playerBtnRepeatSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className={s.playerBtnShuffle}>
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
                      Ты та...
                    </a>
                  </div>
                  <div className={s.trackPlayAlbum}>
                    <a className={s.trackPlayAlbumLink} href="http://">
                      Баста
                    </a>
                  </div>
                </div>

                <div className={s.trackPlayLikeDis}>
                  <div className={s.trackPlayLike}>
                    <svg className={s.trackPlayLikeSvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className={s.trackPlayDislike}>
                    <svg className={s.trackPlayDislikeSvg}>
                      <use xlinkHref="/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar__volume-block volume">
              <div className={s.volumeContent}>
                <div className={s.volumeImage}>
                  <svg className={s.volumeSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className={s.volumeProgress}>
                  <input
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
    )
}