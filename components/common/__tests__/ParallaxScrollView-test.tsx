import React from "react";
import ParallaxScrollView from "../ParallaxScrollView";
import { render, screen } from "@testing-library/react-native";

describe("<ParallaxScrollView />", () => {
  test("renders scroll", () => {
    const {getByTestId} = render(
      <ParallaxScrollView
        headerImage={React.createElement("image")}
        headerBackgroundColor={{ light: "", dark: "" }}
      />
    );
    getByTestId("parallax-scroll")
  });
});
