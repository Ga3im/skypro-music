import s from '@/components/Playlist/Playlist.module.css'
import { TrackType } from '@/types/tracks'
import { Track } from '../Track/Track'
type PlaylistProps = {tracks: TrackType[]}
export const Playlist = ({tracks}:PlaylistProps)=>{

    return(
      <>
        <div className={s.contentPlaylist}>
          {tracks.map((track)=>(
           <Track key={track._id} track={track}/>
          ))}
        </div>
        </>
        
    )
}