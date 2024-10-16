import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { useEffect } from "react";

export default function DaylyPlaylist() {

    // useEffect(()=>{
    //     const getData = async () => {
    //         try {
    //           if (token?.access) {
    //             const res = await getFavoriteTracks(token.access);
    //             dispatch(setFavoriteTracks(res));
    //           }
    //         } catch (error) {
    //           if (error instanceof Error) {
    //             setErr(error.message);
    //           }
    //         }
    //       };
    //       getData();
    // },[])

    return <CenterBlock title={"Инди-Заряд"} />;
}