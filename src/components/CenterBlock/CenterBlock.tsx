"use client";
import s from "@/components/CenterBlock/CenterBlock.module.css";
import classNames from "classnames";
import { Playlist } from "../Playlist/Playlist";
import { MusicFilter } from "@/components/MusicFilter/MusicFilter";
import { KeyboardEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setFilters } from "@/store/feautures/tracksSlice";

type CenterBlockTypes = {
  title: string | undefined;
};

export const CenterBlock = ({ title }: CenterBlockTypes) => {
  const { tracks, allTracks } = useAppSelector((state) => state.tracksSlice);
  const dispatch = useAppDispatch();
  const [err, setErr] = useState<string | null>(null);
  // const [search, setSearch] = useState<string>("");

  // const clickInput = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if(search || e.key === "Enter"){
  //       dispatch(setFilters({ search: search}))
  //       setErr("");
  //    }
  //    else {
  //     setErr("Подходящих треков не нашлось");
  //   }
  // };

 

  return (
    <div className="main__centerblock centerblock">
      <div className={s.centerblockSearch}>
        <svg className={s.searchSvg}>
          <use xlinkHref="/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          onChange={(e) => dispatch(setFilters({search: e.target.value}))}
          // onKeyPress={clickInput}
          className={s.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={s.centerblockH2}>{title}</h2>
      <MusicFilter />
      <div className={s.centerblockContent}>
        <div className={s.contentTitle}>
          <div className={classNames(s.playlistTitleCol, s.col01)}>трек</div>
          <div className={classNames(s.playlistTitleCol, s.col02)}>
            испольнитель
          </div>
          <div className={classNames(s.playlistTitleCol, s.col03)}>альбом</div>
          <div className={classNames(s.playlistTitleCol, s.col04)}>
            <svg className={s.playlistTitleSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <Playlist />
        <p>{err}</p>
      </div>
    </div>
  );
};
