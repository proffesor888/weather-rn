import { MAIN_LIGHT_COLOR } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    borderRadius: 25,
    marginBottom: 32,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderColor: MAIN_LIGHT_COLOR,
    color: MAIN_LIGHT_COLOR,
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: "italic"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#FF5733",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});
