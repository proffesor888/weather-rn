import React from "react";
import { Input } from "../index";
import { renderWithRedux } from "@/utils/testUtil";
import { fireEvent } from "@testing-library/react-native";

describe("<Input />", () => {
  test("renders input", () => {
    const { getByTestId } = renderWithRedux(<Input />);
    getByTestId("search-input");
  });
  test("data saved by typing", () => {
    const { getByTestId, getByDisplayValue } = renderWithRedux(<Input />);
    const el = getByTestId("search-input");
    fireEvent(el, "onChangeText", "Test text");
    getByDisplayValue("Test text");
  });
  test("data removed by search erase click", () => {
    const { getByTestId } = renderWithRedux(<Input />);
    const el = getByTestId("search-input");
    const clearEl = getByTestId("search-clear");
    fireEvent(el, "onChangeText", "Test text");
    fireEvent(clearEl, "press");
    expect(el.props.value).toBe("");
  });
});
