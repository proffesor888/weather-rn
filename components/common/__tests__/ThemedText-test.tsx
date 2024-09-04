import React from "react";
import { render } from "@testing-library/react-native";
import { ThemedText } from "../ThemedText";

jest.mock("@/hooks/useThemeColor", () => ({
  ...jest.requireActual("@/hooks/useThemeColor"),
  useThemeColor: jest.fn(),
}));

describe("<ThemedText />", () => {
  test("renders a component", () => {
    const { getByTestId } = render(<ThemedText>{"text"}</ThemedText>);
    getByTestId("themed-text");
  });
});
