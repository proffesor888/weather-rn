import { mockedForecast } from "../mocks";
import { ICurrent } from "../types";
import { getForecaseForSelectedDays } from "../utils";

describe("getForecaseForSelectedDays", () => {
  test("returns empty array forecast without input data", () => {
    const result = getForecaseForSelectedDays({
      totalHours: [],
      hoursAmount: 5,
      fromStart: false,
    });
    expect(result).toHaveLength(0);
  });
  test("returns forecast data", () => {
    const mockDate = new Date(1725235200);
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    const result = getForecaseForSelectedDays({
      totalHours: mockedForecast.forecastday[0].hour as unknown as ICurrent[],
      hoursAmount: 5,
      fromStart: true,
    });
    expect(result).toHaveLength(5);
  });
});
