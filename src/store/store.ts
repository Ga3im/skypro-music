import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./feautures/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { trackReducer } from "./feautures/tracksSlice";

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      auth: authReducer,
      tracksSlice: trackReducer,  
    }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;