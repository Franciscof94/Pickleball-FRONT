import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { setShiftSuccess } from "../../store/features/shiftsSlice";
import { setStepNumber } from "../../store/features/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { Tick } from "../assets";
import { setDate } from "../utils/setDate";
import { CustomButton } from "./buttons/CustomButton";
import { TextConfirmation } from "./TextConfirmation";
import { TitleFinish } from "./TitleFinish";
import { YourBooking } from "./YourBooking";

interface Props {
  onPrevClick: () => void;
}

export const ThirdStep: FC<Props> = ({ onPrevClick }) => {
  const { watch, reset } = useFormContext();
  const router = useRouter()
  const dispatch = useAppDispatch();

  const email = watch("email");
  const dateAndTime = watch("dateAndTime");
  const handleClick = () => {
    dispatch(setStepNumber(0));
    router.refresh();
    reset()
  };

  return (
    <div className="max-w-[855px] mx-auto min-h-[533px] bg-blue">
      <div className="grid justify-items-center pt-5">
        <TitleFinish>Awesome! your spot is reserved. </TitleFinish>
        <div className="pt-8 pb-6">
          <Image src={Tick} width={105} alt="tick" />
        </div>
        <YourBooking text="Thanks! I´m looking forward to meet you on the court on">
          {setDate(dateAndTime)}.
        </YourBooking>
        <div className="pt-5 pb-8">
          <TextConfirmation>
            I sent a confirmation email with your booking detail{" "}
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
