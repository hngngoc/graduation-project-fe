import { createSlice } from "@reduxjs/toolkit";
import REDUX_SLICE_NAMES from "consts/redux-slice-names";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { ILoadingFullScreenAction, LoadingFullScreenReduxType } from "./types";


const initialState: LoadingFullScreenReduxType = {
  isLoading: false,
};

export const loadingFullScreenSlice = createSlice({
  name: REDUX_SLICE_NAMES.LOADING_FULL_SCREEN,
  initialState,
  reducers: {
    setLoadingState: (state: LoadingFullScreenReduxType = initialState, action: ILoadingFullScreenAction) => {
      if (action && action.payload) {
        state.isLoading = !!action.payload.isLoading;
      }
    },
  },
});

const { setLoadingState } = loadingFullScreenSlice.actions;


export const useGetLoadingState = () =>
  useAppSelector((state: RootState) => state[loadingFullScreenSlice.name]);

export const useSetLoadingState = () => {
  const dispatch = useAppDispatch();
  return {
    showLoading: () => dispatch(setLoadingState({ isLoading: true })),
    closeLoading: () => dispatch(setLoadingState({ isLoading: false })),
  };
};

export default loadingFullScreenSlice;
