import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    tracks: TrackType[]
}

const initialState: initialStateType = {
    tracks:[]
}

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers:{
        setTrackState: (state, action: PayloadAction<TrackType[]>) => {
            state.tracks = action.payload;
        },
    }
})

export const { setTrackState } = trackSlice.actions;
export const trackReducer = trackSlice.reducer