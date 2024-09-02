import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICurrent, ILocation, SearchState } from "./types";

const initialSearchState: SearchState = {
  location: undefined,
  current: undefined,
  forecast: undefined,
  error: undefined
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setSearchResults: (
      state: SearchState,
      action: PayloadAction<{ location: ILocation; current: ICurrent }>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    eraseSearchResults: () => {
      return {
        ...initialSearchState,
      };
    },
    setError: (state: SearchState, action: PayloadAction<{error: unknown}>) => {
      return {
        ...state,
        error: action.payload
      }
    }
  },
});

export const { setSearchResults, eraseSearchResults, setError } = searchSlice.actions;

export default searchSlice.reducer;
