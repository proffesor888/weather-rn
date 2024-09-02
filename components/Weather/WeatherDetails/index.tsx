import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ICurrent, ILocation } from "@/store/types";
import { Image } from "react-native";
import { styles } from "./styles";

export const WeatherDetails = ({
  location,
  current,
  showHours,
}: {
  location?: ILocation;
  current: ICurrent;
  showHours?: boolean;
}) => {
  const hour = current.time?.split(" ")[1];
  return (
    <ThemedView style={styles.textContainer}>
      {showHours && hour && (
        <ThemedText
          lightColor="#1bb835"
          type="title"
        >{`${hour} : `}</ThemedText>
      )}
      {location && (
        <ThemedText
          type="subtitle"
          lightColor="#ccc8c8"
        >{`City: ${location.name}`}</ThemedText>
      )}
      {location && (
        <ThemedText
          type="subtitle"
          lightColor="#ccc8c8"
        >{`Country: ${location.country}`}</ThemedText>
      )}
      <ThemedText
        type="subtitle"
        lightColor="#ccc8c8"
      >{`Current temperature: ${current.temp_c} C`}</ThemedText>
      <ThemedView style={styles.conditionsContainer}>
        <ThemedText type="subtitle" lightColor="#ccc8c8">
          {`${current.condition.text}`}
        </ThemedText>
        <Image
          style={styles.conditionsImage}
          source={{ uri: current.condition.icon }}
        />
      </ThemedView>
    </ThemedView>
  );
};
