import { FC, useState } from "react"
import { useFormContext } from 'react-hook-form';
import { CustomButton } from "./buttons/CustomButton"
import { StepTitle, YourReservations } from "./"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setShowModals, showModals } from "../../store/features/modalsSlice";
import { CancelModal } from "./modals/CancelModal";


interface Props {
    onNextClick: () => void,
}

export const SecondCancelStep: FC<Props> = ({ onNextClick }) => {
    const dispatch = useAppDispatch()
    const { watch } = useFormContext()
    const shiftCancel = watch('shiftCancel')
    const { modals: { modalCancel } } = useAppSelector(showModals)
    

    const handleOpenModal = () => {
        dispatch(setShowModals({
            name: "modalCancel",
            isOpen: true
        }))
    }

    return (
        <section className='max-w-[855px] mx-auto min-h-[533px]'>
            <CancelModal isOpen={modalCancel} onNextClick={onNextClick}/>
            <div className=''>
                <div className="">
                    <StepTitle>
                        Your reservations
                    </StepTitle>
                    <div className="grid justify-items-center pt-6">
                        <YourReservations />
                    </div>
                    <div className="flex flex-column items-center pt-[230px] lg:pt-[92px] md:pt-[92px]">
                        <CustomButton
                            onClick={handleOpenModal}
                            width="w-[356px]"
                            disabled={shiftCancel ? false : true}
                        >
                            CANCEL
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section >
    )
}