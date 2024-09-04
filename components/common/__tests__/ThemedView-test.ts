import { render } from "@testing-library/react-native";
import { ThemedView } from "../ThemedView";

describe("<ThemedView />", () => {
  test("renders component", () => {
    const { getByTestId } = render(ThemedView({ children: "text" }));
    getByTestId("themed-view");
  });
});
