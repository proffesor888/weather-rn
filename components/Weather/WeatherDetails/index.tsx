import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { ICurrent, ILocation } from "@/store/types";
import { Image } from "react-native";
import { styles } from "./styles";
import { MAIN_LIGHT_COLOR, SECONDARY_HIGHLIGHT_COLOR } from "@/constants";

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
          lightColor={SECONDARY_HIGHLIGHT_COLOR}
          type="title"
        >{`${hour} : `}</ThemedText>
      )}
      {location && (
        <ThemedText
          type="subtitle"
          lightColor={MAIN_LIGHT_COLOR}
        >{`City: ${location.name}`}</ThemedText>
      )}
      {location && (
        <ThemedText
          type="subtitle"
          lightColor={MAIN_LIGHT_COLOR}
        >{`Country: ${location.country}`}</ThemedText>
      )}
      <ThemedText
        type="subtitle"
        lightColor={MAIN_LIGHT_COLOR}
      >{`Current temperature: ${current.temp_c} C`}</ThemedText>
      <ThemedView style={styles.conditionsContainer}>
        <ThemedText type="subtitle" lightColor={MAIN_LIGHT_COLOR}>
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
