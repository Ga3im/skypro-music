"use client";
import { getFavoriteTracks, getTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { setAllTracks, setDefaultTracks, setFavoriteTracks, setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getTracks();
        dispatch(setTrackState(res));
        dispatch(setDefaultTracks(res));
        dispatch(setAllTracks(res))
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
  return <CenterBlock title={"Треки"} />;
}
