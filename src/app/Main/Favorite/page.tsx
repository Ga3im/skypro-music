"use client";
import { getFavoriteTracks, getTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export default function FavoritePage() {
  const dispatch = useAppDispatch();
  const { myPlaylist } = useAppSelector((state) => state.tracksSlice);
    dispatch(setTrackState(myPlaylist))
  return <CenterBlock title={"Избранное"} />;
}
