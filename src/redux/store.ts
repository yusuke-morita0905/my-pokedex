import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { homeSlice } from "../redux/slices/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootAppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootAppState> = useSelector;