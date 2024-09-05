'use client'
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { Navigation } from "@/components/Navigation/Navigation";
import { Player } from "@/components/Player/Player";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useAppSelector } from "@/store/store";

export default function Home() {
  const {thisTrack} = useAppSelector(state => state.tracksSlice)
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Navigation/>
            <CenterBlock/>
            <Sidebar/>
          </main>
          {thisTrack && <Player  thisTrack={thisTrack} />}      
          <footer className="footer"></footer>
        </div>
      </div>
    </>
  );
}
