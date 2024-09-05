import React from "react";
import HomeScreen from "../index";
import { renderWithRedux } from "@/utils/testUtil";

describe("<HomeScreen />", () => {
  test("home screen rendered", () => {
    const { getByTestId, getByText } = renderWithRedux(<HomeScreen />);
    getByTestId("parallax-scroll");
    getByText("Search");
    getByText("Clear search");
  });
});
