import classNames from "classnames";
import s from "./MusicFilter.module.css";
export const MusicFilter = () => {
  return (
    <div className={s.centerblockFilter}>
      <div className={s.filterTitle}>Искать по:</div>
      <div className={classNames(s.filterButton, s.btnText)}>исполнителю</div>
      <div className={classNames(s.filterButton, s.btnText)}>году выпуска</div>
      <div className={classNames(s.filterButton, s.btnText)}>жанру</div>
    </div>
  );
};
