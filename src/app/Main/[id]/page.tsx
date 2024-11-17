"use client";
import { getSelectionTracksId } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import {setDefaultTracks, setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/types/tracks";
import { useEffect, useState } from "react";

type propParam = {
  params: string,
}

export default function Page({ params }:propParam) {
  const dispatch = useAppDispatch();
  const { allTracks } = useAppSelector((state) => state.tracksSlice);
  const [playlistName, setPlaylistName] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      try {
        const arr: TrackType[] = [];
        const res = await getSelectionTracksId(params.id);
        setPlaylistName(res.name);
        res.items.filter((i: number) => {
          allTracks.map((e) => {
            if (i === e._id) {
              arr.push(e);
            }
          });
        });
        dispatch(setTrackState(arr));
        dispatch(setDefaultTracks(arr));
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    getData();
  }, []);

  return <CenterBlock title={playlistName} />;
}
