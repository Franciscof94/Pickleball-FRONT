import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import useWindowDimensions from "../../hooks/useResize";
import { getShifts } from "../../store/features/shiftsSlice";
import { useAppSelector } from "../../store/hooks";
import { outfit } from "../home-page";
import { setDate } from "../utils/setDate";
import { CustomButton } from "./buttons/CustomButton";
import { CustomInput } from "./inputs/CustomInput";
import { StepTitle } from "./StepTitle";
import { YouChose } from "./YouChose";

interface Props {
  onNextClick: () => void;
  onPrevClick: () => void;
}

export const SecondStep: FC<Props> = ({ onNextClick, onPrevClick }) => {
  const { watch } = useFormContext();
  const { isSuccess } = useAppSelector(getShifts);
  const { width } = useWindowDimensions()
  const name = watch("name");
  const lastName = watch("lastName");
  const email = watch("email");
  const dateAndTime = watch('dateAndTime')

  useEffect(() => {
    if (isSuccess) {
      onNextClick();
    }
  }, [isSuccess]);

  return (
    <section className="max-w-[855px] mx-auto min-h-[533px]">
      <div className="">
        <div className="">
          <StepTitle>Contact information</StepTitle>
          <div className="grid justify-items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <CustomInput
                type="text"
                name="name"
                placeholder="Name"
                width="w-[312px] md:w-[340px] lg:w-[400px]"
                label="Name"
                margin="md:ml-[5px] lg:ml-[5px]"
              />
              <CustomInput
                type="text"
                name="lastName"
                placeholder="Last name"
                width="w-[312px] md:w-[340px] lg:w-[400px]"
                label="Last name"
                margin="md:ml-[5px] lg:ml-[5px]"
              />
              <CustomInput
                type="text"
                name="email"
                placeholder="Email"
                width="w-[312px] md:w-[340px] lg:w-[400px]"
                label="Email"
                margin="md:ml-[5px] lg:ml-[5px]"
              />
              
            </div>
            <div className="flex flex-column items-center mt-[95px]">
            {width!! < 768 && <YouChose padding="pb-5">{setDate(dateAndTime)}</YouChose>}
              <CustomButton
                width="w-[356px]"
                disabled={
                  name?.length && lastName?.length && email?.length
                    ? false
                    : true
                }
              >
                NEXT
              </CustomButton>
              <button
                onClick={onPrevClick}
                className={`mt-4 text-green font-bold text-xl ${outfit.className}`}
              >
                Edit booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
