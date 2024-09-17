import { useAppSelector } from "@/store/store";
import { CenterBlock } from "../CenterBlock/CenterBlock"
import { Navigation } from "../Navigation/Navigation"
import { Sidebar } from "../Sidebar/Sidebar"
import { Player } from "../Player/Player";
import s from './Main.module.css'

export const Main = ()=>{
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