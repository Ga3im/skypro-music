import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  tracks: TrackType[];
  thisTrack: TrackType | null;
  shuffledTracks: TrackType[];
  isShuffle: boolean;
  isPlaying: boolean;
  myPlaylist: TrackType[];
  isLiked: boolean;
  isFavorite: boolean;
};

const initialState: initialStateType = {
  tracks: [],
  thisTrack: null,
  shuffledTracks: [],
  isShuffle: false,
  isPlaying: false,
  myPlaylist: [],
  isLiked: false,
  isFavorite: false,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setIsFavorite: (state, action)=>{
      state.isFavorite = action.payload;
    },
    setIsLiked:(state, action:PayloadAction<boolean>)=>{
      state.isLiked = action.payload;
    },
    setTrackState: (state, action: PayloadAction<TrackType[]>) => {
      state.tracks = action.payload;
      state.shuffledTracks = action.payload;
    },
    setThisTrack: (state, action: PayloadAction<TrackType>) => {
      state.thisTrack = action.payload;
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffle ? state.shuffledTracks : state.tracks;
      const trackIndex = playlist.findIndex(
        (item) => item._id === state.thisTrack?._id
      );
      if (trackIndex === playlist.length - 1) {
        return;
      }
      state.thisTrack = playlist[trackIndex + 1];
    },
    setPrevTrack: (state) => {
      const playlist = state.isShuffle ? state.shuffledTracks : state.tracks;
      const trackIndex = playlist.findIndex(
        (item) => item._id === state.thisTrack?._id
      );
      if (trackIndex === 0) {
        return;
      }
      state.thisTrack = playlist[trackIndex - 1];
    },
    setShuffle: (state) => {
      state.shuffledTracks.sort(() => Math.random() - 0.5);
    },
    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
    },
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setAddToMyPlaylist: (state) => {
      state.myPlaylist.push(state.thisTrack);
    },
  },
});

export const {
  setTrackState,
  setThisTrack,
  setNextTrack,
  setPrevTrack,
  setIsShuffle,
  setShuffle,
  setPlay,
  setIsLiked,
  setIsFavorite,
  setAddToMyPlaylist,
} = trackSlice.actions;
export const trackReducer = trackSlice.reducer;
