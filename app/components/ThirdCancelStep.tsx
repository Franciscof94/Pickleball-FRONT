import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TitleFinish, YourBooking, TextConfirmation, CustomButton } from "./";
import { Tick } from "../assets";
import { useFormContext } from "react-hook-form";
import { setDate } from "../utils/setDate";
import { setStepNumber } from "../../store/features/uiSlice";
import { useAppDispatch } from "../../store/hooks";


interface Props {
  onPrevClick: () => void;
}

export const ThirdCancelStep: FC<Props> = ({ onPrevClick }) => {
  const { watch, reset } = useFormContext();
  const router = useRouter()
  const dispatch = useAppDispatch()


  const email = watch("email");
  const shiftCancel = watch("shiftCancel");

  const handleClick = () => {
    dispatch(setStepNumber(0))
    router.refresh();
    reset()
  };

  return (
    <div className="max-w-[855px] mx-auto min-h-[533px] bg-blue">
      <div className="grid justify-items-center pt-7">
        <TitleFinish>Your spot is canceled.</TitleFinish>
        <div className="pt-8 pb-6">
          <Image src={Tick} width={105} alt="tick" />
        </div>
        <YourBooking
          text="Thanks! I´m looking forward to meet you on the court on"
          lastText="has been canceled."
        >
          <span></span>
          {setDate(shiftCancel)}.<span></span>
        </YourBooking>
        <div className="pt-5 pb-8">
          <TextConfirmation>
            I sent a confirmation email to{" "}
            <span className="font-bold">{email}</span>
          </TextConfirmation>
        </div>
        <CustomButton width="w-[356px]" onClick={handleClick}>
          BACK TO BOOKING
        </CustomButton>
      </div>
    </div>
  );
};
