import { getForecastForHours, getWeatherData } from "@/store/selectors";
import { View, Image } from "react-native";
import { useSelector } from "react-redux";
import { ThemedText } from "../ThemedText";

const PRESELECTED_HOURS_AMOUNT = 5;

export const Weather = () => {
  const { current, location } = useSelector(getWeatherData);
  const forecast = useSelector((state) =>
    getForecastForHours(state, PRESELECTED_HOURS_AMOUNT)
  );
  if (!current || !location) return null;
  return (
    <View>
      <ThemedText>{`City: ${location.name}`}</ThemedText>
      <ThemedText>{`Country: ${location.country}`}</ThemedText>
      <ThemedText>{`Current temperature: ${current.temp_c} C`}</ThemedText>
      <ThemedText>Conditions:</ThemedText>
      <ThemedText>
        {`${current.condition.text}`}
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: current.condition.icon }}
        />
      </ThemedText>
    </View>
  );
};
