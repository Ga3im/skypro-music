"use client";
import { getSelectionTracksId } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/types/tracks";
import { useEffect } from "react";

export default function Page({ params }) {
  const dispatch = useAppDispatch();
  const { allTracks } = useAppSelector((state) => state.tracksSlice);
  useEffect(() => {
    const getData = async () => {
      try {
        const arr: TrackType[] = [];
        const res = await getSelectionTracksId(params.id);
        console.log(res.items);
        res.items.filter((i: any) => {
          allTracks.map((e) => {
            if (i === e._id) {
              arr.push(e);
            }
          });
        });
        dispatch(setTrackState(arr));
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    getData();
  }, []);

  return <CenterBlock title={"playlistName"} />;
}
