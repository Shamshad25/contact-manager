import { configureStore } from "@reduxjs/toolkit";
import { FormSlice } from "../feature/formSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    contact: FormSlice.reducer,
    // cases: CasesSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
