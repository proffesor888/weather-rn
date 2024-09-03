import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./types";
import { getForecaseForSelectedDays } from "./utils";

export const getSearchState = (state: RootState) => state.search;
export const getSearchError = createSelector(getSearchState, (state) => {
  return state.error;
})
export const getForecastForHours = createSelector(
  [getSearchState, (_, hoursAmount: number) => hoursAmount],
  (searchState, hoursAmount) => {
    let forecast = [];
    if (searchState.forecast?.forecastday) {
      const firstDay = searchState.forecast.forecastday[0];
      forecast = getForecaseForSelectedDays({
        totalHours: firstDay.hour,
        hoursAmount,
      });
      if (forecast.length < hoursAmount) {
        const hoursDifference = hoursAmount - forecast.length;
        const secondDay = searchState.forecast.forecastday[1];
        return forecast.concat(
          getForecaseForSelectedDays({
            totalHours: secondDay.hour,
            hoursAmount: hoursDifference,
            fromStart: true,
          })
        );
      }
      return forecast;
    }
    return [];
  }
);
