import { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addDays from "date-fns/addDays";
import isSameDay from "date-fns/isSameDay";
import moment from "moment";
import { StepTitle } from "./StepTitle";
import { YouChose } from "./YouChose";
import { CustomButton } from "./buttons/CustomButton";
import { TextInformation } from "./TextInformation";
import useWindowDimensions from "../../hooks/useResize";
import { setTimeToCalendar } from "../utils/setTime";
import { setDate } from "../utils/setDate";
import { IShift } from "../../interfaces";


interface Props {
  onNextClick: () => void;
  allShifts: IShift[]
}

export const FirstStep: FC<Props> = ({ onNextClick, allShifts }) => {
  const { control, watch } = useFormContext();
  const { width } = useWindowDimensions();
  const [startDate, setStartDate] = useState<any>(null);
  const [times, setTimes] = useState<any>([]);
  const [disabledButton, setDisabledButton] = useState(true);
  const dateAndTime = watch("dateAndTime");

  const filterPassedTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const allShift = allShifts?.map((value: any) => new Date(value.dateAndTime));

  const allShiftExcludes = allShift.map((value: any) => {
    return setHours(
      setMinutes(
        addDays(new Date(value), 0),
        value.toString().substring(19, 21)
      ),
      value.toString().substring(16, 18)
    );
  });

  const getExcludeTimesForDate = (date: any) =>
    allShiftExcludes.filter((time: any) => isSameDay(date, time));

  const handleChangeShift = (date: any) => {
    setTimeToCalendar(date, setTimes, setStartDate);
    const disabledButton = date.toString().substring(16, 24);
    if (disabledButton !== "00:00:00") {
      setDisabledButton(false);
    }
  };



  return (
    <section className="max-w-[855px] mx-auto min-h-[533px]">
      <StepTitle>
        {width!! > 768 ? "Select a day and time" : "Book a day and time"}
      </StepTitle>
      <TextInformation />
      <div className="relative">
        <div className="flex justify-center">
          <Controller
            control={control}
            name="dateAndTime"
            render={({ field }) => (
              <DatePicker
                selected={startDate}
                onChange={(value) => {
                  handleChangeShift(value);
                  setStartDate(value);
                  field.onChange(value);
                }}
                inline

                showTimeSelect
                minDate={moment().toDate()}
                filterTime={filterPassedTime}
                includeTimes={times}
                excludeTimes={getExcludeTimesForDate(startDate)}
                placeholderText="Select a weekday"
              />
            )}
          />
        </div>
        <div className="mt-1 md:absolute lg:absolute lg:h-18 md:h-18 lg:min-w-[439px] md:min-w-[439px] grid justify-items-center  right-[60px] md:right-[37px] lg:bottom-[-15px] md:bottom-[-15px]">
          <div className="hidden lg:block md:block">
            {!disabledButton && (
              <YouChose padding="pb-4">{setDate(dateAndTime)}</YouChose>
            )}
          </div>
          <CustomButton
            width="w-[356px]"
            onClick={onNextClick}
            disabled={disabledButton}
          >
            NEXT
          </CustomButton>
        </div>
      </div>
    </section>
  );
};
