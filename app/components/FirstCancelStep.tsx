import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { fetchShifts, getShifts } from "../../store/features/shiftsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { outfit } from "../page";
import { CustomButton } from "./buttons/CustomButton";
import { CustombuttonSpinner } from "./buttons/CustomButtonSpinner";
import { CustomInput } from "./inputs/CustomInput";
import { StepTitle } from "./StepTitle";
import { TextSecondStep } from "./TextSecondStep";

interface Props {
  onNextClick: () => void;
}

export const FirstCancelStep: FC<Props> = ({ onNextClick }) => {
  const { watch } = useFormContext();
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useAppDispatch();
  const { status, error, shiftsToCancel } = useAppSelector(getShifts);
  const name = watch("name");
  const lastName = watch("lastName");
  const email = watch("email");

  const handleClick = async () => {
    const { payload } = await dispatch(fetchShifts(email));
    setShowAlert(true);
    if (payload?.length) {
      onNextClick();
    }
  };

  return (
    <section className="max-w-[855px] mx-auto min-h-[533px]">
      <div className="">
        <StepTitle>
          Contact information
          <TextSecondStep />
        </StepTitle>
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

          <div className="flex flex-column items-center mt-[118px]">
            <div className="pb-3">
              {showAlert && !shiftsToCancel?.length && !error && (
                <small
                  className={`text-sm lg:text-xl md:text-xl text-error font-bold ${outfit.className}`}
                >
                  There are no shifts available with the email entered.
                </small>
              )}
              {!shiftsToCancel?.length && error && (
                <small
                  className={`text-sm lg:text-xl md:text-xl text-error font-bold ${outfit.className}`}
                >
                  An unexpected error has occurred.
                </small>
              )}
            </div>
            {status === "loading" ? (
              <CustombuttonSpinner />
            ) : (
              <CustomButton
                onClick={handleClick}
                width="w-[356px]"
                disabled={
                  name?.length && lastName?.length && email?.length
                    ? false
                    : true
                }
              >
                NEXT
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
