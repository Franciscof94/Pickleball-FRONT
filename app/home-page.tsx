"use client";
import { useEffect } from "react";
import { Audiowide, Outfit } from "@next/font/google";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Banner, StepContainer } from "./components";
import { BookingSchema } from "../validations";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectUi, setStepNumber } from "../store/features/uiSlice";
import { postShift } from "../services/POST/postShift";
import { IShift } from "../interfaces";
import { setShiftSuccess } from "../store/features/shiftsSlice";

export const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

export const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  allShifts: IShift[];
}

export default function Page({ allShifts }: Props) {

  const dispatch = useAppDispatch();
  const { stepNumber } = useAppSelector(selectUi);
  const methods = useForm<IShift>({
    resolver: yupResolver(BookingSchema),
    mode: "all",
  });

  const onSubmit = async (data: IShift) => {
    try {
      const res = await postShift(data);
      console.log("FIJARSE ACA", res)
      dispatch(setShiftSuccess(true))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(setStepNumber(0));
  }, []);


  return (
    <FormProvider {...methods}>
      <form
        className={`${stepNumber === 2  ? "bg-blue" : "bg-dirty-white"}`}
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
