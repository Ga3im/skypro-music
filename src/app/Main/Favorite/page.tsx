"use client";
import { getFavoriteTracks } from "@/api/api";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { setFavoriteTracks, setTrackState } from "@/store/feautures/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FavoritePage() {

  const dispatch = useAppDispatch();
  let { myPlaylist} = useAppSelector((state) => state.tracksSlice);
  dispatch(setTrackState(myPlaylist));
  const { token } = useAppSelector((state) => state.auth);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      try {
        if (token?.access) {
          const res = await getFavoriteTracks(token.access);
          dispatch(setFavoriteTracks(res));
        }
        else{
          alert('Автоизуйтесь, чтобы увидеть Избранное треки')
          router.push('/');
        }
      } catch (error) {
        if (error instanceof Error) {
          setErr(error.message);
        }
      }
    };
    getData();
  
  }, []);

  return <CenterBlock title={'Избранное'} />;
}
