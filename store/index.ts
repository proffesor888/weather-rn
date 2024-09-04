import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./searchSlice";

export const rootReducer = combineReducers({
  search: searchReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
