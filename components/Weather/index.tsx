import { getForecastForDays, getWeatherData } from "@/store/selectors";
import { View, Image } from "react-native";
import { useSelector } from "react-redux";
import { ThemedText } from "../ThemedText";

export const Weather = () => {
  const { current, location } = useSelector(getWeatherData);
  const forecast = useSelector((state) => getForecastForDays(state, 5));
  const hasCurrentData = Object.keys(current).length;
  const hasLocationData = Object.keys(location).length;
  if (!hasCurrentData || !hasLocationData) return null;
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
