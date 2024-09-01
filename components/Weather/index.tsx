import { getForecastForHours, getWeatherData } from "@/store/selectors";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { ThemedText } from "../ThemedText";
import { WeatherDetails } from "./WeatherDetails";

const PRESELECTED_HOURS_AMOUNT = 5;

export const Weather = () => {
  const { current, location } = useSelector(getWeatherData);
  const forecast = useSelector((state) =>
    getForecastForHours(state, PRESELECTED_HOURS_AMOUNT)
  );
  if (!current || !location) return null;
  return (
    <View>
      <WeatherDetails current={current} location={location} />
      <ThemedText>{`Forecast for next ${PRESELECTED_HOURS_AMOUNT} hours:`}</ThemedText>
      {forecast.map((forecastPerHour) => {
        return (
          <WeatherDetails
            key={forecastPerHour.time_epoch}
            current={forecastPerHour}
          />
        );
      })}
    </View>
  );
};
