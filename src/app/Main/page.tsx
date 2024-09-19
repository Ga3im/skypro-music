'use client'
import { useAppSelector } from "@/store/store";
import s from './Main.module.css'
import { Navigation } from "@/components/Navigation/Navigation";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Player } from "@/components/Player/Player";
import { useRouter } from "next/navigation";

 const Main = ()=>{
  const { thisTrack } = useAppSelector((state) => state.tracksSlice);
  const {user, token} = useAppSelector(state => state.auth)
  const nav = useRouter()
  if (user && token === null) {
    nav.push('/Login')
  }
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