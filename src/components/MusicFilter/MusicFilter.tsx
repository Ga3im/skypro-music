"use client"
import s from "@/components/MusicFilter/MusicFilter.module.css";
import React from "react";
import { FilterItem } from "../FilterItem/FilterItem";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setTrackState } from "@/store/feautures/tracksSlice";

type prop = {
  search: string | undefined 
}


export const MusicFilter = ({search}: prop) => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  // const {allTracks} = useAppSelector(state=> state.tracksSlice);

  const getUniqValues = React.useCallback( <T, K extends keyof T> (
    items: T[],
    key: K
  ): string[] => {
    const uniqValues = new Set<string>();
    items.forEach((item) => {
      uniqValues.add(String(item[key]));
    });
    return Array.from(uniqValues);
  },[])

  const {tracks} = useAppSelector((state)=> state.tracksSlice)
  const dispatch = useAppDispatch();
  
  const resetSearchBtn = () => {
    dispatch(setTrackState(tracks))
  }

  const filterOptions = ["По умолчанию", "Сначала новые", "Сначала старые"];
  const filters = [
    {
      title: "испольнителю",
      key: "authors",
      list: getUniqValues(tracks, "author"),
      selected: useAppSelector((store)=>
        store.tracksSlice.activeFilters.authors
      )
    },
    {
      title: "году выпуска",
      key: "date",
      list: filterOptions,
      selected: useAppSelector((store)=>
        store.tracksSlice.activeFilters.date
      )
    },
    {
      title: "жанру",
      key: "genres",
      list: getUniqValues(tracks, "genre"),
      selected: useAppSelector((store)=>
        store.tracksSlice.activeFilters.genres
      )
    },
  ];

  return (
    <div className={s.centerblockFilter}>
      <div className={s.filterTitle}>Искать по:</div>
      {filters.map((item)=>(
        <FilterItem
          key={item.key}
          id={item.key}
          selected={item.selected}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          title={item.title}
          list={item.list}
        />
      ))}
      <div onClick={resetSearchBtn} className={s.returnSearch}>
   <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g id="Layer_6" data-name="Layer 6"><circle cx="64" cy="64" fill="#696969" r="37"></circle></g><g id="Layer_5" fill="#fff" data-name="Layer 5"><path d="m64 76a11.9958 11.9958 0 0 1 -9.25-19.6387 1 1 0 0 1 1.5391 1.2774 9.9967 9.9967 0 1 0 7.7109-3.6387h-2.75a1 1 0 0 1 0-2h2.75a12 12 0 0 1 0 24z" fill="#fff" ></path><path d="m65.999 58a.9965.9965 0 0 1 -.624-.2188l-5-4a1.0012 1.0012 0 0 1 0-1.5624l5-4a1 1 0 0 1 1.25 1.5624l-4.0244 3.2188 4.0244 3.2188a1 1 0 0 1 -.626 1.7812z" fill="#fff"></path></g></svg>
   </div>
    </div>
  );
};
