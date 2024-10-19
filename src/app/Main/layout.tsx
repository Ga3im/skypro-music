"use client";
import { getFavoriteTracks } from "@/api/api";
import s from "@/app/Main/Main.module.css";
import { Navigation } from "@/components/Navigation/Navigation";
import { Player } from "@/components/Player/Player";
import { Sidebar } from "@/app/Main/Sidebar/Sidebar";
import {
  setFavoriteTracks,
} from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ReactNode, useEffect, useState } from "react";
type layoutProps = {
  children: ReactNode;
};

export default function layout({ children }: layoutProps) {
  const { thisTrack } = useAppSelector((state) => state.tracksSlice);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        if (token?.access) {
          const res = await getFavoriteTracks(token.access);
          dispatch(setFavoriteTracks(res));
        }
      } catch (error) {
        if (error instanceof Error) {
          setErr(error.message);
        }
      }
    };
    getData();
  }, []);
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
