import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICurrent, ILocation, SearchState } from "./types";

const initialSearchState: SearchState = {
  location: {},
  current: {},
  forecast: {},
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
  },
});

export const { setSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
