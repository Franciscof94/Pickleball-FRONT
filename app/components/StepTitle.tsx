import { FC } from "react"
import { selectUi } from "../../store/features/uiSlice"
import { useAppSelector } from "../../store/hooks"
import { audiowide } from "../home-page"
import { StepNumber } from "./StepNumber"

interface Props {
    children: React.ReactNode
}

export const StepTitle: FC<Props> = ({ children }) => {
    const { stepNumber } = useAppSelector(selectUi)

    return (
        <div className="text-[24px] flex justify-center md:pt-7 lg:ml-[-15px] md:ml-[-15px] lg:pt-7 pb-[30px]">
            <div className="flex justify-center md:justify-start lg:justify-start md:max-w-[715px] lg:max-w-[880px] w-full">
                <div className="flex items-center t">
                    <StepNumber>
                        <span className="text-white">{stepNumber +1}</span>
                    </StepNumber>
                    <div>
                        <div className={`grid justify-items-center lg:justify-items-start md:justify-items-start text-blue-text ${audiowide.className}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}