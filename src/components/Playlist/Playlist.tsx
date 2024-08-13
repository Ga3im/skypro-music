import s from '@/components/Playlist/Playlist.module.css'
export const Playlist = ()=>{
    return(
        <div className={s.contentPlaylist}>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                    Guilt <span className={s.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                  Nero
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                  Welcome Reality
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>4:44</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  Elektro <span className={s.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                Dynoro, Outwork, Mr. Gee
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                Elektro
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>2:22</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  I’m Fire <span className={s.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                Ali Bakgor
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                I’m Fire
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>2:22</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  Non Stop <span className={s.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                Стоункат, Psychopath
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                 Non Stop
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>4:12</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  Run Run <span className={s.trackTitleSpan}>(feat. AR/CO)</span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                Jaded, Will Clarke, AR/CO
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                Run Run
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>2:54</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  Eyes on Fire <span className={s.trackTitleSpan}>(Zeds Dead Remix)</span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                Blue Foundation, Zeds Dead
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                Eyes on Fire
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>5:20</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  Mucho Bien <span className={s.trackTitleSpan}> (Hi Profile Remix)</span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                Mucho Bien
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>3:41</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  Knives n Cherries <span className={s.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                minthaze
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>1:48</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  How Deep Is Your Love <span className={s.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                Calvin Harris, Disciples
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                How Deep Is Your Love
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>3:32</span>
              </div>
            </div>
          </div>
          <div className={s.playlistItem}>
            <div className={s.playlistTrack}>
              <div className={s.trackTitle}>
                <div className={s.trackTitleImage}>
                  <svg className={s.trackTitleSvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className={s.trackTitleLink} href="http://">
                  Morena <span className={s.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={s.trackAuthor}>
                <a className={s.trackAuthorLink} href="http://">
                Tom Boxer
                </a>
              </div>
              <div className={s.trackAlbum}>
                <a className={s.trackAlbumLink} href="http://">
                Soundz Made in Romania
                </a>
              </div>
              <div className="track__time">
                <svg className={s.trackTimeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s.trackTimeText}>3:36</span>
              </div>
            </div>
          </div>      
        </div>
    )
}