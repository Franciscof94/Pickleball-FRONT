import { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import { useFormContext } from "react-hook-form";
import { FaCalendarTimes } from "react-icons/fa";
import { setShowModals } from "../../../store/features/modalsSlice";
import { useAppDispatch } from "../../../store/hooks";
import { customStyles } from "./CustomStyles";
import { outfit } from "../../home-page";
import { deleteShift } from "../../../services/DELETE/deleteShift";
import { setDate } from "../../utils/setDate";
import { fetchShifts } from "../../../store/features/shiftsSlice";

interface Props {
  isOpen: boolean;
  onNextClick: any;
}

export const CancelModal: FC<Props> = ({ isOpen, onNextClick }) => {
  const dispatch = useAppDispatch();
  const { watch } = useFormContext();
  const email = watch("email");
  const shiftCancel = watch("shiftCancel");

  const closeModal = () => {
    dispatch(setShowModals({ name: "modalCancel", isOpen: false }));
  };

  useEffect(() => {
    if(isOpen) {
    document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClick = () => {
    try {
      const res = deleteShift(email, shiftCancel);
      dispatch(setShowModals({ name: "modalCancel", isOpen: false }));
      onNextClick();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Cancel Modal"
    >
      <div className="bg-blue px-4 pt-6 pb-4">
        <div className="grid justify-items-center text-center">
          <span
            className={`text-white font-normal text-lg ${outfit.className}`}
          >
            Do you want to cancel your spot on {setDate(shiftCancel)}?
          </span>
          <div className="mt-5 mb-9">
            <FaCalendarTimes color="#00CCD9" size={80} />
          </div>
          <div className="flex justify-between w-full px-8">
            <button
              className={`text-green font-bold text-xl ${outfit.className}`}
              onClick={handleClick}
            >
              Yes
            </button>
            <button
              className={`text-green font-bold text-xl ${outfit.className}`}
              onClick={() => {
                dispatch(setShowModals({ name: "modalCancel", isOpen: false }));
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
