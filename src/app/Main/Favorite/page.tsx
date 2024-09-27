"use client";
import { getFavoriteTracks, getTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

export default function FavoritePage() {
  const dispatch = useAppDispatch();
  const [err, setErr] = useState<string | null>(null);
  const { myPlaylist } = useAppSelector((state) => state.tracksSlice);
    dispatch(setTrackState(myPlaylist))
  return <CenterBlock title={"Избранное"} />;
}
