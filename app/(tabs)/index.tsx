import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/common/ParallaxScrollView";
import { Input } from "@/components/Input";
import { Weather } from "@/components/Weather";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/Header.png")}
          style={styles.logo}
        />
      }
    >
      <Input />
      <Weather />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
