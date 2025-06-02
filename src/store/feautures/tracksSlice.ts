import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  tracks: TrackType[];
  thisTrack: TrackType | null;
  shuffledTracks: TrackType[];
  isShuffle: boolean;
  isPlaying: boolean;
  myPlaylist: TrackType[];
  filteredTracks: TrackType[];
  defaultTracks: TrackType[];
  activeFilters: {
    genres: string[];
    authors: string[];
    date: string;
    search: string;
  };
};

export const initialState: initialStateType = {
  tracks: [],
  filteredTracks: [],
  thisTrack: null,
  shuffledTracks: [],
  isShuffle: false,
  isPlaying: false,
  myPlaylist: [],
  defaultTracks: [],
  activeFilters: {
    genres: [],
    authors: [],
    date: "По умолчанию",
    search: "",
  },
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setResetFilter: (
      state,
      action: PayloadAction<{
        genres?: string[];
        authors?: string[];
        date?: string;
        search?: string;
      }>
    ) => {
      let { genres, authors, date } = action.payload;

      authors = [];
    },
    setFilters: (
      state,
      action: PayloadAction<{
        genres?: string[];
        authors?: string[];
        date?: string;
        search?: string;
      }>
    ) => {
      const { genres, authors, date } = action.payload;

      state.activeFilters.authors = authors ?? state.activeFilters.authors;
      state.activeFilters.genres = genres ?? state.activeFilters.genres;
      state.activeFilters.date = date ?? state.activeFilters.date;
      state.activeFilters.search =
        action.payload.search !== undefined
          ? action.payload.search
          : state.activeFilters.search;

      const SORT_OPTIONS: Record<string, string> = {
        DEFAULT: "По умолчанию",
        NEW: "Сначала новые",
        OLD: "Сначала старые",
      };
      const sortFunctions: Record<
        string,
        (a: TrackType, b: TrackType) => number
      > = {
        [SORT_OPTIONS.NEW]: (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime(),
        [SORT_OPTIONS.OLD]: (a, b) =>
          new Date(a.release_date).getTime() -
          new Date(b.release_date).getTime(),
      };

      const sortFunction = sortFunctions[state.activeFilters.date];

      let onlyPlaylist = state.tracks;

      if (state.activeFilters.authors.length > 0) {
        onlyPlaylist = onlyPlaylist.filter((track) =>
          state.activeFilters.authors.includes(track.author)
        );
      }
      if (state.activeFilters.genres.length > 0) {
        onlyPlaylist = onlyPlaylist.filter((track) =>
          state.activeFilters.genres.includes(track.genre[0])
        );
      }
      if (state.activeFilters.search.length) {
        onlyPlaylist = onlyPlaylist.filter(
          (track) =>
            track.name
              .toLowerCase()
              .includes(state.activeFilters.search.toLowerCase()) ||
            track.author
              .toLowerCase()
              .includes(state.activeFilters.search.toLowerCase())
        );
      }
      if (sortFunction) {
        onlyPlaylist = onlyPlaylist.sort(sortFunction);
      }
      if (date === "По умолчанию") {
        onlyPlaylist = state.defaultTracks;
      }
      state.filteredTracks = onlyPlaylist;
    },
    setfilteredTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.filteredTracks = action.payload;
    },
    setAddLike: (state, action: PayloadAction<TrackType>) => {
      if (
        state.myPlaylist.some((favTrack) => favTrack._id === action.payload._id)
      ) {
        return {
          ...state,
          filteredTracks: state.filteredTracks.filter(
            (i) => i._id !== action.payload._id
          ),
          myPlaylist: state.myPlaylist.filter(
            (i) => i._id !== action.payload._id
          ),
        };
      } else {
        return {
          ...state,
          myPlaylist: [...state.myPlaylist, action.payload],
          filteredTracks: [...state.filteredTracks, action.payload],
        };
      }
    },
    setFavoriteTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.myPlaylist = action.payload;
    },
    setTrackState: (state, action: PayloadAction<TrackType[]>) => {
      state.tracks = action.payload;
      state.shuffledTracks = action.payload;
      state.filteredTracks = action.payload;
      state.defaultTracks = action.payload;
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
  },
});

export const {
  setTrackState,
  setThisTrack,
  setNextTrack,
  setPrevTrack,
  setIsShuffle,
  setFavoriteTracks,
  setShuffle,
  setResetFilter,
  setPlay,
  setfilteredTracks,
  setFilters,
  setAddLike,
} = trackSlice.actions;
export const trackReducer = trackSlice.reducer;
