import React from "react";
import { WeatherDetails } from "../index";
import { render, screen } from "@testing-library/react-native";
import { MOCKED_STORE } from "@/store/mocks";
import { ICurrent } from "@/store/types";

describe("<WeatherDetails />", () => {
  const props = {
    location: MOCKED_STORE.search.location,
    current: MOCKED_STORE.search.current as ICurrent,
  };
  test("renders all fiels", () => {
    render(
      <WeatherDetails
        {...props}
      />
    );
    expect(screen.getAllByTestId("themed-view")).toHaveLength(2);
    expect(screen.getAllByTestId("themed-text")).toHaveLength(4);
  });
  test("renders fiels with hours", () => {
    render(
      <WeatherDetails
        {...props}
        showHours
      />
    );
    expect(screen.getAllByTestId("themed-text")).toHaveLength(5);
  });
});
