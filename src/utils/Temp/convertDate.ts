import { format, parseISO, getHours, startOfWeek, lastDayOfWeek } from "date-fns";

export function ConvertDate(date: string) {
  const dateFormated = format(parseISO(date), "dd/MM/yyyy  HH:mm");

  return dateFormated;
}

export function ConvertHour(date: string) {
  const hourFormated = getHours(parseISO(date));

  return hourFormated;
}

export function FormatDateWeek() {
  const firstDayOfWeek = format(startOfWeek(new Date()), "dd/MM/yyyy");
  const latterDayOfWeek = format(lastDayOfWeek(new Date()), "dd/MM/yyyy");

  return { firstDayOfWeek, latterDayOfWeek };
}
