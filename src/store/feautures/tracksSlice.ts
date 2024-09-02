import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  tracks: TrackType[];
  thisTrack: TrackType[] | null;
  defaultTracks: TrackType[];
  isShuffle: boolean;
  isPlaying: boolean;
};

const initialState: initialStateType = {
  tracks: [],
  thisTrack: null,
  defaultTracks: [],
  isShuffle: false,
  isPlaying: false,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTrackState: (state, action: PayloadAction<TrackType[]>) => {
      state.tracks = action.payload;
      state.defaultTracks = action.payload;
    },
    setThisTrack: (state, action: PayloadAction<TrackType[]>) => {
      state.thisTrack = action.payload;
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffle ? state.tracks : state.defaultTracks;
      const trackIndex = playlist.findIndex(
        (item) => item._id === state.thisTrack?._id
      );
      state.thisTrack = playlist[trackIndex + 1];
    },
    setPrevTrack: (state) => {
      const trackIndex = state.tracks.findIndex(
        (item) => item._id === state.thisTrack?._id
      );
      state.thisTrack = state.tracks[trackIndex - 1];
    },
    setShuffle: (state) => {
      state.defaultTracks.sort(() => Math.random() - 0.5);
    },
    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
    },
    setPlay:(state, action: PayloadAction<boolean>) =>{
      state.isPlaying = action.payload;
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
  setCurrentTrack,
  setPlay,
} = trackSlice.actions;
export const trackReducer = trackSlice.reducer;
