"use client";
import { getFavoriteTracks } from "@/api/api";
import s from "@/app/Main/Main.module.css";
import { Navigation } from "@/components/Navigation/Navigation";
import { Player } from "@/components/Player/Player";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { setFavoriteTracks, setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ReactNode, useEffect } from "react";

type layoutProps = {
  children: ReactNode;
};



export default function Layout({ children }: layoutProps) {
  const { thisTrack } = useAppSelector((state) => state.tracksSlice);
  const { token } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        if (token?.access) {
          const res = await getFavoriteTracks(token.access);
          dispatch(setFavoriteTracks(res));
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    getData();
  }, [dispatch, token?.access]);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <main className={s.main}>
          <Navigation />
          {children}
          <Sidebar />
        </main>
        {thisTrack && <Player thisTrack={thisTrack} />}
        <footer className={s.footer}></footer>
      </div>
    </div>
  );
}
