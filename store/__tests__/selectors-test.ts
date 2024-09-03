import { MOCKED_STORE } from "../mocks";
import {
  getSearchState,
  getSearchError,
  getForecastForHours,
} from "../selectors";

describe("selectors", () => {
  const hours = 5;
  test("getSearchState return search store", () => {
    const { current, location, forecast } = MOCKED_STORE.search;
    const result = getSearchState(MOCKED_STORE);
    expect(result).toEqual({ current, location, forecast });
  });
  test("getSearchError returns error message", () => {
    const result = getSearchError({
      ...MOCKED_STORE,
      search: { ...MOCKED_STORE.search, error: "ERROR" },
    });
    expect(result).toEqual("ERROR");
  });
  test("getForecastForHours returns array of weather data", () => {
    const result = getForecastForHours(MOCKED_STORE, hours);
    expect(result).toHaveLength(hours);
  });
  test("getForecastForHours returns empty array without data", () => {
    const result = getForecastForHours(
      {
        ...MOCKED_STORE,
        search: { ...MOCKED_STORE.search, forecast: undefined },
      },
      hours
    );
    expect(result).toEqual([]);
  });
});
