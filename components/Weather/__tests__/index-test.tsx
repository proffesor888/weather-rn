import React from "react";
import { Weather } from "../index";
import { renderWithRedux } from "@/utils/testUtil";
import { MOCKED_STORE } from "@/store/mocks";

describe("<Weather />", () => {
  test("returns 'null' without data", () => {
    const { queryAllByTestId } = renderWithRedux(<Weather />);
    expect(queryAllByTestId("themed-view")).toHaveLength(0);
  });
  test("renders forecast", () => {
    const { getByText, getAllByTestId } = renderWithRedux(
      <Weather />,
      MOCKED_STORE
    );
    getByText("Current weather:");
    getByText("Forecast for next 5 hours:");
    expect(getAllByTestId("themed-view")).toHaveLength(13);
  });
});
