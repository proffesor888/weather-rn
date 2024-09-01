import { ICurrent } from "./types";

export const getForecaseForSelectedDays = (
  totalHours: ICurrent[],
  hoursAmount: number
) => {
  const currentHour = new Date().getHours();
  const selectedForecastHours = [];
  for (
    let i = currentHour;
    i <= currentHour + hoursAmount && i <= totalHours.length - 1;
    i++
  ) {
    selectedForecastHours.push(totalHours[i]);
  }
  return selectedForecastHours;
};
