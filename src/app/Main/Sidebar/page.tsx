"use client";
import { getSelectionTracks, getSelectionTracksId, getTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/types/tracks";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const { allTracks } = useAppSelector((state) => state.tracksSlice);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSelectionTracks();
        console.log(res);

        res.map((track: any) => {
          const q: TrackType[] = [];
          let id: number;
          const arr = track.items;
          if (track.name === "Инди-заряд") {
            id = track._id;
            arr.filter((i: any) => {
              allTracks.map((e) => {
                if (i === e._id) {
                  q.push(e);
                }
              });
            });
          }
          if (track.name === "Танцевальные хиты") {
            id = track._id;
            arr.filter((i: any) => {
              allTracks.map((e) => {
                if (i === e._id) {
                  q.push(e);
                }
              });
            });
          }
          if (track.name === "Плейлист дня") {
            id = track._id;
            arr.filter((i: any) => {
              allTracks.map((e) => {
                if (i === e._id) {
                  q.push(e);
                }
              });
            });
          }

          dispatch(setTrackState(q));
        });
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    getData();
  }, []);

  return <CenterBlock title={"Плейлист дня"} />;
}
