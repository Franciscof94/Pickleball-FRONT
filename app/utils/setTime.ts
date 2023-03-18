import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { database } from "./database";

interface IDatabase {
  id: number;
  hour: string;
  name: string;
}

export const setTimeToCalendar = (
  date: Date,
  setTimes: (value: any) => void,
  setStartDate: (date: Date) => void
) => {
  const dayPicker = date.toString().substring(0, 3);

  if (dayPicker === "Mon") {
    setStartDate(date);
    let Monday = database.map((exclude: IDatabase) => {
      return (
        exclude.name === "mon" &&
        setHours(
          setMinutes(date, Number(exclude.hour.substring(3, 5))),
          Number(exclude.hour.substring(0, 2))
        )
      );
    });

    setTimes(Monday);
  }

  if (dayPicker === "Tue") {
    setStartDate(date);
    let Tuesday = database.map((exclude: IDatabase) => {
      return (
        exclude.name === "tue" &&
        setHours(
          setMinutes(date, Number(exclude.hour.substring(3, 5))),
          Number(exclude.hour.substring(0, 2))
        )
      );
    });

    setTimes(Tuesday);
  }

  if (dayPicker === "Wed") {
    setStartDate(date);
    let Wednesday = database.map((exclude: IDatabase) => {
      return (
        exclude.name === "wed" &&
        setHours(
          setMinutes(date, Number(exclude.hour.substring(3, 5))),
          Number(exclude.hour.substring(0, 2))
        )
      );
    });

    setTimes(Wednesday);
  }

  if (dayPicker === "Thu") {
    setStartDate(date);
    let Thursday = database.map((exclude: IDatabase) => {
      return (
        exclude.name === "thu" &&
        setHours(
          setMinutes(date, Number(exclude.hour.substring(3, 5))),
          Number(exclude.hour.substring(0, 2))
        )
      );
    });
    setTimes(Thursday);
  }

  if (dayPicker === "Fri") {
    setStartDate(date);
    let Friday = database.map((exclude: IDatabase) => {
      return (
        exclude.name === "fri" &&
        setHours(
          setMinutes(date, Number(exclude.hour.substring(3, 5))),
          Number(exclude.hour.substring(0, 2))
        )
      );
    });
    setTimes(Friday);
  }

  if (dayPicker === "Sat") {
    setStartDate(date);
    let Saturday = database.map((exclude: IDatabase) => {
      return (
        exclude.name === "sat" &&
        setHours(
          setMinutes(date, Number(exclude.hour.substring(3, 5))),
          Number(exclude.hour.substring(0, 2))
        )
      );
    });
    setTimes(Saturday);
  }

  if (dayPicker === "Sun") {
    setStartDate(date);
    let Sunday = database.map((exclude: IDatabase) => {
      return (
        exclude.name === "sun" &&
        setHours(
          setMinutes(date, Number(exclude.hour.substring(3, 5))),
          Number(exclude.hour.substring(0, 2))
        )
      );
    });
    setTimes(Sunday);
  }
};
