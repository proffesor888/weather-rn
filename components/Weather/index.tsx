import { getForecastForHours, getSearchState } from "@/store/selectors";
import { useSelector } from "react-redux";
import { ThemedText } from "../common/ThemedText";
import { WeatherDetails } from "./WeatherDetails";
import { ThemedView } from "../common/ThemedView";
import { HIGHLIGHT_COLOR, PRESELECTED_HOURS_AMOUNT } from "@/constants";

export const Weather = () => {
  const { current, location } = useSelector(getSearchState);
  const forecast = useSelector((state) =>
    getForecastForHours(state, PRESELECTED_HOURS_AMOUNT)
  );
  if (!current || !location) return null;
  return (
    <ThemedView>
      <ThemedText lightColor={HIGHLIGHT_COLOR} type="title">
        Current weather:
      </ThemedText>
      <WeatherDetails current={current} location={location} />
      <ThemedText
        lightColor={HIGHLIGHT_COLOR}
        type="title"
      >{`Forecast for next ${PRESELECTED_HOURS_AMOUNT} hours:`}</ThemedText>
      {forecast.map((forecastPerHour) => {
        return (
          <WeatherDetails
            key={forecastPerHour.time_epoch}
            current={forecastPerHour}
            showHours
          />
        );
      })}
    </ThemedView>
  );
};
