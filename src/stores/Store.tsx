import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DefaultSlice } from "../features/slices/defaultSlices";

export const store = configureStore({
    reducer: {
        default: DefaultSlice.reducer,
    }
});

export const useAppDispath: ()=> typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;