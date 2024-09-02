import { getForecastForHours, getWeatherData } from "@/store/selectors";
import { useSelector } from "react-redux";
import { ThemedText } from "../common/ThemedText";
import { WeatherDetails } from "./WeatherDetails";
import { ThemedView } from "../common/ThemedView";
import { PRESELECTED_HOURS_AMOUNT } from "@/constants";

export const Weather = () => {
  const { current, location } = useSelector(getWeatherData);
  const forecast = useSelector((state) =>
    getForecastForHours(state, PRESELECTED_HOURS_AMOUNT)
  );
  if (!current || !location) return null;
  return (
    <ThemedView>
      <ThemedText lightColor="#c32f0f" type="title">
        Current weather:
      </ThemedText>
      <WeatherDetails current={current} location={location} />
      <ThemedText
        lightColor="#c32f0f"
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
