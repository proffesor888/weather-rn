import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./types";
import { getForecaseForSelectedDays } from "./utils";

export const getSearchState = (state: RootState) => state.search;
export const getWeatherData = createSelector(
  [getSearchState],
  (searchState) => searchState
);
export const getForecastForDays = createSelector(
  [getSearchState, (_, hoursAmount: number) => hoursAmount],
  (searchState, hoursAmount) => {
    if(searchState.forecast?.forecastday) {
        const availableDay = searchState.forecast.forecastday[0];
        return getForecaseForSelectedDays(availableDay.hour, hoursAmount);
    }
    return [];
  }
);
