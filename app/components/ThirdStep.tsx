import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  getShifts,
  sendCode,
  verifyCode,
} from "../../store/features/shiftsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { outfit } from "../home-page";
import { CustomButton } from "./buttons/CustomButton";
import { CustombuttonSpinner } from "./buttons/CustomButtonSpinner";
import { CustomInput } from "./inputs/CustomInput";
import { StepTitle } from "./StepTitle";

interface Props {
  onNextClick: () => void;
}

export const ThirdStep: FC<Props> = ({ onNextClick }) => {
  const dispatch = useAppDispatch();
  const { watch, setFocus } = useFormContext();
  const { statusVerifyCode, allShiftsToResendCode, error, statusSendCode } =
    useAppSelector(getShifts);
  const email = watch("email");
  const numberOneCode = watch("numberOne");
  const numberTwoCode = watch("numberTwo");
  const numberThreeCode = watch("numberThree");
  const numberFourCode = watch("numberFour");
  const numberFiveCode = watch("numberFive");

  useEffect(() => {
    if (numberOneCode) {
      setFocus("numberTwo");
    }
    if (numberTwoCode) {
      setFocus("numberThree");
    }
    if (numberThreeCode) {
      setFocus("numberFour");
    }
    if (numberFourCode) {
      setFocus("numberFive");
    }
    if (numberFiveCode) {
      setFocus("numberSix");
    }
  }, [
    numberOneCode,
    numberTwoCode,
    numberThreeCode,
    numberFourCode,
    numberFiveCode,
    setFocus,
  ]);

  useEffect(() => {
    if (statusVerifyCode == "succeeded") {
      onNextClick();
    }
  }, [statusVerifyCode]);

  const handleClick = () => {
    /* dispatch(sendCode(email)) */
  };


  return (
    <div className="min-h-[533px]">
      <div className="">
        <div className="">
          <StepTitle>Verification code</StepTitle>
          <div className="flex flex-column justify-center gap-3 items-center pt-12">
            <div className="grid justify-items-center">
              <h3
                className={`text-blue-text text-lg lg:text-2xl md:text-2xl  ${outfit.className}`}
              >
                Enter the code has been sent to your email.
              </h3>
            </div>
            <div className="flex justify-center gap-3 items-center">
              <CustomInput
                width="w-[35px] lg:w-[50px] md:w-[50px]"
                name="numberOne"
                placeholder=""
                fontSize="text-2xl"
                padding="pl-[12px] lg:pl-[18px] md:pl-[18px]"
                maxLength={1}
                type="text"
                label=""
              />
              <CustomInput
                width="w-[35px] lg:w-[50px] md:w-[50px]"
                name="numberTwo"
                placeholder=""
                padding="pl-[12px] lg:pl-[18px] md:pl-[18px]"
                fontSize="text-2xl"
                maxLength={1}
                type="text"
                label=""
              />
              <CustomInput
                width="w-[35px] lg:w-[50px] md:w-[50px]"
                name="numberThree"
                fontSize="text-2xl"
                padding="pl-[12px] lg:pl-[18px] md:pl-[18px]"
                placeholder=""
                maxLength={1}
                type="text"
                label=""
              />
              <div className="h-[4px] rounded w-3 bg-blue-text"></div>
              <CustomInput
                width="w-[35px] lg:w-[50px] md:w-[50px]"
                name="numberFour"
                padding="pl-[12px] lg:pl-[18px] md:pl-[18px]"
                fontSize="text-2xl"
                placeholder=""
                maxLength={1}
                type="text"
                label=""
              />
              <CustomInput
                width="w-[35px] lg:w-[50px] md:w-[50px]"
                name="numberFive"
                fontSize="text-2xl"
                padding="pl-[12px] lg:pl-[18px] md:pl-[18px]"
                placeholder=""
                type="text"
                maxLength={1}
                label=""
              />
              <CustomInput
                width="w-[35px] lg:w-[50px] md:w-[50px]"
                name="numberSix"
                fontSize="text-2xl"
                padding="pl-[12px] lg:pl-[18px] md:pl-[18px]"
                placeholder=""
                maxLength={1}
                type="text"
                label=""
              />
            </div>

            <button
              className={`text-base rounded-full bg-blue px-3 py-1 text-white ${outfit.className}`}
              onClick={handleClick}
            >
              Resend code
            </button>
          </div>
          <div className="grid justify-items-center pt-12">
            {error && (
              <small
                className={`text-sm pb-3 lg:text-xl md:text-xl text-error font-bold ${outfit.className}`}
              >
                The code does not correspond to the one that was sent to your
                email.
              </small>
            )}
            {statusVerifyCode === "loading" ? (
              <CustombuttonSpinner />
            ) : (
              <CustomButton width="w-[356px]">NEXT</CustomButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
