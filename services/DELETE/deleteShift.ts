import { shiftApi } from "../../api";

export const deleteShift = async (email: string, dateAndTime: string) => {
  const { data } = await shiftApi.delete("", { data: { dateAndTime, email } });
  return data;
};
