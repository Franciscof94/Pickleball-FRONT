import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { outfit } from "../home-page";
import { useFormContext, Controller } from "react-hook-form";
import { useAppSelector } from "../../store/hooks";
import { getShifts } from "../../store/features/shiftsSlice";
import { setDateReservations } from "../utils/setDate";


export const YourReservations = () => {
  const { control } = useFormContext();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { shiftsToCancel } = useAppSelector(getShifts);

  const handleRadioSelect = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="max-w-[360px] p-2 max-h-[220px] overflow-y-scroll w-full"
        style={{ display: "grid", gap: "1rem" }}
      >
        {shiftsToCancel?.map((shift: any, index: number) => (
          <div
            key={index}
            className={`flex items-center justify-between ${
              index === selectedItem
                ? "shadow-[1px_3px_4px_rgba(0,0,0,0.25)] bg-white rounded-[20px]"
                : "bg-dirty-white"
            } p-2`}
          >
            <div className="bg-aqua-opacity h-8 w-8 flex items-center ml-1 justify-center rounded-full">
              <FaCalendarAlt size={22} color="#00ccd9" />
            </div>
            <div className="flex items-center pl-1 max-w-[212px] w-full">
              <span
                className={`text-base text-blue-text font-extrabold ${outfit.className}`}
              >
                {setDateReservations(shift.dateAndTime)}
              </span>
            </div>
            <div className="flex items-center justify-end cursor-pointer">
              <Controller
                control={control}
                name="shiftCancel"
                render={({ field }) => (
                  <input
                    onClick={() => setSelectedItem(index)}
                    onChange={() => {
                      {
                        handleRadioSelect(index);
                        field.onChange(shift.dateAndTime);
                      }
                    }}
                    checked={index === selectedItem}
                    type="radio"
                    className="form-check-input"
                  />
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
