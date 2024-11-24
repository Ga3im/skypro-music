"use client";
import { getFavoriteTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import {
  setFavoriteTracks,
  setTrackState,
} from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function FavoritePage() {
  const dispatch = useAppDispatch();
  let { myPlaylist } = useAppSelector((state) => state.tracksSlice);
  dispatch(setTrackState(myPlaylist));
  const { token } = useAppSelector((store) => store.auth);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        if (token?.access) {
          const res = await getFavoriteTracks(token.access);
          dispatch(setFavoriteTracks(res));
        }
        else{
          alert('авторизуйтесь');
         router.push('/');
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    getData();
  }, [dispatch, router, token?.access]);  

  return <CenterBlock title={"Избранное"} />;
}
