'use client'
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { Navigation } from "@/components/Navigation/Navigation";
import { Player } from "@/components/Player/Player";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { TrackType } from "@/types/tracks";
import { useState } from "react";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null)
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Navigation/>
            <CenterBlock setCurrentTrack={setCurrentTrack}/>
            <Sidebar/>
          </main>
          {currentTrack && <Player currentTrack={currentTrack} />}      
          <footer className="footer"></footer>
        </div>
      </div>
    </>
  );
}
