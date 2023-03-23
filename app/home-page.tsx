"use client";
import { useEffect } from "react";
import { Audiowide, Outfit } from "@next/font/google";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Banner, StepContainer } from "./components";
import { BookingSchema } from "../validations";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectUi, setStepNumber } from "../store/features/uiSlice";
import { IShift } from "../interfaces";
import {
  fetchAllShifts,
  getShifts,
  sendCode,
  setShiftSuccess,
  verifyCode,
} from "../store/features/shiftsSlice";

export const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

export const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const dispatch = useAppDispatch();
  const { allShifts } = useAppSelector(getShifts);

  const { stepNumber } = useAppSelector(selectUi);
  const methods = useForm<IShift>({
    resolver: yupResolver(BookingSchema),
    mode: "all",
  });

  const onSubmit = async (data: IShift) => {
    const code =
      data.numberOne +
      data.numberTwo +
      data.numberThree +
      data.numberFour +
      data.numberFive +
      data.numberSix;

    const allData = {
      code,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      dateAndTime: data.dateAndTime,
    };
    /* dispatch(setShiftToResendCode(allData)); */

    const res = await dispatch(verifyCode(allData))
    
  };

  useEffect(() => {
    dispatch(setStepNumber(0));
    const promise = dispatch(fetchAllShifts());
   
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        className={`${stepNumber === 3 ? "bg-blue" : "bg-dirty-white"}`}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <section>
          <div className="text-3xl font-bold underline text-red-500">
            <Banner />
            <StepContainer allShifts={allShifts} />
          </div>
        </section>
      </form>
    </FormProvider>
  );
}
