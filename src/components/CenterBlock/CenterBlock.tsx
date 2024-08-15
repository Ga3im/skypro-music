import s from '@/components/CenterBlock/CenterBlock.module.css'
import classNames from 'classnames'
import { Playlist } from '../Playlist/Playlist';
export const CenterBlock = () => {
  return (
    <div className="main__centerblock centerblock">
      <div className={s.centerblockSearch}>
        <svg className={s.searchSvg}>
          <use xlinkHref="/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={s.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={s.centerblockH2}>Треки</h2>
      <div className={s.centerblockFilter}>
        <div className={s.filterTitle}>Искать по:</div>
        <div className={classNames(s.filterButton, s.btnText) }> 
          исполнителю
        </div>
        <div className={classNames(s.filterButton, s.btnText) }>году выпуска</div>
        <div className={classNames(s.filterButton, s.btnText) }>жанру</div>
      </div>
      <div className={s.centerblockContent}>
        <div className={s.contentTitle}>
          <div className={classNames(s.playlistTitleCol, s.col01)}>Трек</div>
          <div className={classNames(s.playlistTitleCol, s.col02)}>Исполнитель</div>
          <div className={classNames(s.playlistTitleCol, s.col03)}>Альбом</div>
          <div className={classNames(s.playlistTitleCol, s.col04)}>
            <svg className={s.playlistTitleSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <Playlist/>
      </div>
    </div>
  );
};
