import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import useWindowDimensions from "../../hooks/useResize";
import { getShifts, sendCode } from "../../store/features/shiftsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { outfit } from "../home-page";
import { setDate } from "../utils/setDate";
import { CustomButton } from "./buttons/CustomButton";
import { CustombuttonSpinner } from "./buttons/CustomButtonSpinner";
import { CustomInput } from "./inputs/CustomInput";
import { StepTitle } from "./StepTitle";
import { YouChose } from "./YouChose";

interface Props {
  onNextClick: () => void;
  onPrevClick: () => void;
}

export const SecondStep: FC<Props> = ({ onNextClick, onPrevClick }) => {
  const { watch } = useFormContext();
  const dispatch = useAppDispatch()
  const { isSuccess, statusSendCode } = useAppSelector(getShifts);
  const { width } = useWindowDimensions();
  const name = watch("name");
  const lastName = watch("lastName");
  const email = watch("email");
  const dateAndTime = watch("dateAndTime");




  useEffect(() => {
    if (isSuccess) {
      onNextClick();
    }
  }, [isSuccess]);

  const handleClick =async () => {
    

      const res = await dispatch(sendCode(email));
 

  }

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
                padding="p-2"
                fontSize="text-base"
                placeholder="Name"
                width="w-[312px] md:w-[340px] lg:w-[400px]"
                label="Name"
                margin="md:ml-[5px] lg:ml-[5px]"
              />
              <CustomInput
                type="text"
                name="lastName"
                padding="p-2"
                fontSize="text-base"
                placeholder="Last name"
                width="w-[312px] md:w-[340px] lg:w-[400px]"
                label="Last name"
                margin="md:ml-[5px] lg:ml-[5px]"
              />
              <CustomInput
                type="text"
                name="email"
                padding="p-2"
                fontSize="text-base"
                placeholder="Email"
                width="w-[312px] md:w-[340px] lg:w-[400px]"
                label="Email"
                margin="md:ml-[5px] lg:ml-[5px]"
              />
            </div>
            <div className="flex flex-column items-center mt-[90px] lg:mt-[95px] md:mt-[95px]">
              {width!! < 768 && (
                <YouChose padding="pb-5">{setDate(dateAndTime)}</YouChose>
              )}
              {statusSendCode === "loading" ? (
                <CustombuttonSpinner />
              ) : (
                <CustomButton
                  width="w-[356px]"
                  onClick={handleClick}
                  disabled={
                    name?.length && lastName?.length && email?.length
                      ? false
                      : true
                  }
                >
                  NEXT
                </CustomButton>
              )}
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
