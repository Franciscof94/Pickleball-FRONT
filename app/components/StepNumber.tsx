import { FC } from "react"
import { audiowide } from "../home-page"

interface Props {
    children: React.ReactNode
}

export const StepNumber:FC<Props> = ({ children }) => {
    return (
        <div className={`mr-[20px] hidden lg:flex md:flex items-center justify-center h-[45px] w-[45px] rounded-full bg-blue-text ${audiowide.className}`}>
            {children}
        </div>
    )
}