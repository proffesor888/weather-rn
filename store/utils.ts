import { ICurrent } from "./types";

export const getForecaseForSelectedDays = ({
  totalHours,
  hoursAmount,
  fromStart,
}: {
  totalHours: ICurrent[];
  hoursAmount: number;
  fromStart?: boolean;
}) => {
  const currentHour = new Date().getHours();
  const selectedForecastHours = [];
  const startHour = fromStart ? 0 : currentHour + 1;
  for (
    let i = startHour;
    i < startHour + hoursAmount && i <= totalHours.length - 1;
    i++
  ) {
    selectedForecastHours.push(totalHours[i]);
  }
  return selectedForecastHours;
};
