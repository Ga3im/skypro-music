import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { Navigation } from "@/components/Navigation/Navigation";
import { Player } from "@/components/Player/Player";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Navigation/>
            <CenterBlock/>
            <Sidebar/>
          </main>
          <Player/>
          <footer className="footer"></footer>
        </div>
      </div>
    </>
  );
}
