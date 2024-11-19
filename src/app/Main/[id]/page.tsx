"use client";
import { getSelectionTracksId, getTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/types/tracks";
import { useEffect, useState } from "react";

export default function Page({ params }:{params: {id: string}}) {
  const dispatch = useAppDispatch();
  const { tracks } = useAppSelector((state) => state.tracksSlice);
  const [playlistName, setPlaylistName] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      try {
        const arr: TrackType[] = [];
        const allTracks = await getTracks();
        const res = await getSelectionTracksId(Number(params.id));
   

        setPlaylistName(res.name);
        res.items.filter((i: number) => {
          allTracks.map((e) => {
            if (i === e._id) {
  
              arr.push(e);
            }
          });
        });
        console.log(arr)
        dispatch(setTrackState(arr));
        // dispatch(setDefaultTracks(arr));
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
