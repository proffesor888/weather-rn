import { ThemedText } from "@/components/ThemedText";
import { ICurrent, ILocation } from "@/store/types";
import { View, Image } from "react-native";

export const WeatherDetails = ({
  location,
  current,
}: {
  location?: ILocation;
  current: ICurrent;
}) => {
  return (
    <View>
      {location && <ThemedText>{`City: ${location.name}`}</ThemedText>}
      {location && <ThemedText>{`Country: ${location.country}`}</ThemedText>}
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
