"use client";
import s from "@/components/CenterBlock/CenterBlock.module.css";
import classNames from "classnames";
import { Playlist } from "../Playlist/Playlist";
import { MusicFilter } from "@/components/MusicFilter/MusicFilter";
import { getFavoriteTracks, getTracks } from "@/api/api";
import { TrackType } from "@/types/tracks";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {  setFavoriteTracks, setTrackState } from "@/store/feautures/tracksSlice";

type CenterBlockTypes = {
  title: string;
}

export const CenterBlock = ({  title }:CenterBlockTypes) => {
  const [err, setErr] = useState<string | null>(null);
  // const dispatch = useAppDispatch();
  // const access = useAppSelector(state => state.auth.token?.access)

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await getFavoriteTracks({access})
  //       const res = await getTracks();
  //       dispatch(setTrackState(res));
  //       dispatch(setFavoriteTracks(response));
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setErr(error.message);
  //       }
  //     }
  //   };
  //   getData();
  // }, []);

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
      <h2 className={s.centerblockH2}>{title}</h2>
      <MusicFilter />
      <div className={s.centerblockContent}>
        <div className={s.contentTitle}>
          <div className={classNames(s.playlistTitleCol, s.col01)}>Трек</div>
          <div className={classNames(s.playlistTitleCol, s.col02)}>
            Исполнитель
          </div>
          <div className={classNames(s.playlistTitleCol, s.col03)}>Альбом</div>
          <div className={classNames(s.playlistTitleCol, s.col04)}>
            <svg className={s.playlistTitleSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <Playlist  />
        <p>{err}</p>
      </div>
    </div>
  );
};
