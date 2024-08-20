"use client"
import s from "@/components/MusicFilter/MusicFilter.module.css";
import { TrackType } from "@/types/tracks";
import React, { useState } from "react";
import { FilterItem } from "../FilterItem/FilterItem";

type FilterProp = { tracks: TrackType[] };

export const MusicFilter = ({ tracks }: FilterProp) => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

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
