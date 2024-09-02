import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    outlineStyle: "none",
    height: 50,
    borderRadius: 25,
    marginBottom: 32,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderColor: "#ccc8c8",
    color: "#ccc8c8",
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
  }
});
