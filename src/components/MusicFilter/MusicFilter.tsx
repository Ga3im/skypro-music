import classNames from "classnames";
import s from "@/components/MusicFilter/MusicFilter.module.css";
import { TrackType } from "@/types/tracks";
import { useState } from "react";
type FilterProp = { tracks: TrackType[] };
export const MusicFilter = ({ tracks }: FilterProp) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const getUniqValues = <T, K extends keyof T>(
    items: T[],
    key: K
  ): string[] => {
    const uniqValues = new Set<string>();
    items.forEach((item) => {
      uniqValues.add(String(item[key]));
    });
    return Array.from(uniqValues);
  };
  const filterOptions = ["По умолчанию", "Новые", "Старые"];
  const filters = [
    {
      title: "испольнителью",
      key: "author",
      list: getUniqValues(tracks, "author"),
    },
    {
      title: "жанру",
      key: "genre",
      list: getUniqValues(tracks, "genre"),
    },
    {
      title: "году выпуска",
      key: "year",
      list: filterOptions,
    },
  ];
  return (
    <div className={s.centerblockFilter}>
      <div className={s.filterTitle}>Искать по:</div>
      <div className={classNames(s.filterButton, s.btnText)}>
        {/*пройтись по filters и на каждой отображать title список показать только если activeFilter = author   */}
        исполнителю
      </div>
      <div className={classNames(s.filterButton, s.btnText)}>году выпуска</div>
      <div className={classNames(s.filterButton, s.btnText)}>жанру</div>
    </div>
  );
};
