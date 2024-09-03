import { renderHook } from "@testing-library/react-native";
import { useThemeColor } from "../useThemeColor";
import * as Native from "react-native";
import { Colors } from "@/constants";

jest.spyOn(Native, "useColorScheme").mockReturnValue("light");

describe("useThemeColor", () => {
  test("returns color from props", () => {
    const { result } = renderHook(() =>
      useThemeColor({ light: "#000" }, "text")
    );
    expect(result.current).toEqual("#000");
  });
  test("returns color from color scheme", () => {
    const {result} = renderHook(() => useThemeColor({}, "text"));
    expect(result.current).toEqual(Colors.light["text"]);
  });
});
