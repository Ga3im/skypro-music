"use client";
import { getSelectionTracks, getTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { setDaylyPlaylist, setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export default function DaylyPlaylist() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const { tracks } = useAppSelector((state) => state.tracksSlice);
  useEffect(() => {
    const getData = async () => {
      try {
        if (token?.access) {
          const res = await getSelectionTracks(token.access);
          res.map((track) => {
            if (track.name === "Плейлист дня") {
              const q = [];
              const arr = track.items;
              arr.filter((i) => {
                tracks.map((e) => {
                  if (i === e._id) {
                    q.push(e);
                  }
                });
              });

              dispatch(setTrackState(q));
            }
          });
        }
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
