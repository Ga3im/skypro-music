"use client";
import {  getTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import {  setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect, useState } from "react";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getTracks();
        dispatch(setTrackState(res));
      } catch (error) {
        if (error instanceof Error) {
          setErr(error.message);
        }
      }
    };
    getData();
  }, []);
  return <CenterBlock  title={'Треки'}/>;
}
