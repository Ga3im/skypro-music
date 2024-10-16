"use client"
import s from "@/components/MusicFilter/MusicFilter.module.css";
import React from "react";
import { FilterItem } from "../FilterItem/FilterItem";
import { useAppSelector } from "@/store/store";

export const MusicFilter = () => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  const {tracks} = useAppSelector(state=> state.tracksSlice);
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

  const filterOptions = ["По умолчанию", "Сначала новые", "Сначала старые"];
  const filters = [
    {
      title: "испольнителю",
      key: "author",
      list: getUniqValues(tracks, "author"),
    },
    {
      title: "году выпуска",
      key: "year",
      list: filterOptions,
    },
    {
      title: "жанру",
      key: "genre",
      list: getUniqValues(tracks, "genre"),
    },
  ];

  return (
    <div className={s.centerblockFilter}>
      <div className={s.filterTitle}>Искать по:</div>
      {filters.map((item)=>(
        <FilterItem
          key={item.key}
          id={item.key}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          title={item.title}
          list={item.list}
        />
      ))}
    </div>
  );
};
