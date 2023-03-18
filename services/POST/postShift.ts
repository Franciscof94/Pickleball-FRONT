import { shiftApi } from "../../api";
import { IShift } from "../../interfaces";

export const postShift = async (shiftData: IShift) => {
  console.log(shiftData)
  const { data } = await shiftApi.post("/", shiftData);
  return data;
};
