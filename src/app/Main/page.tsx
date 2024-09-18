'use client'
import { useAppSelector } from "@/store/store";
import s from './Main.module.css'
import { Navigation } from "@/components/Navigation/Navigation";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Player } from "@/components/Player/Player";

 const Main = ()=>{
  const { thisTrack } = useAppSelector((state) => state.tracksSlice);
    return(
    <div className={s.wrapper}>
    <div className={s.container}>
      <main className={s.main}>
        <Navigation />
        <CenterBlock />
        <Sidebar />
      </main>
      {thisTrack && <Player thisTrack={thisTrack} />}
      <footer className={s.footer}></footer>
    </div>
  </div>
    )
}
export default Main;