import { renderHook } from "@testing-library/react-native";
import * as useSearchHook from "../useSearch";
import * as SWR from "swr/mutation";

const swrSpy = jest.spyOn(SWR, "default");

describe("useSearch", () => {
  test("triggers fetching library", () => {
    const { result } = renderHook(() => useSearchHook.useSearch());
    expect(swrSpy).toHaveBeenCalled();
    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("error");
    expect(result.current).toHaveProperty("trigger");
  });
});
