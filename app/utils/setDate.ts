import moment from "moment";

export const setDate = (date: Date | string) => {
  return moment(date).format("dddd, MMM D [at] HH:mm [hs]");
};

export const setDateReservations = (date: Date) => {
  return moment(date).format("ddd, MMM D [at] HH:mm [hs]");
};
