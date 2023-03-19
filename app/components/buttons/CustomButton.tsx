import { FC } from "react"
import { outfit } from "../../page"


interface Props {
    children: React.ReactNode,
    width: string,
    onClick?: (data?: any) => void,
    disabled?: boolean,
}

export const CustomButton: FC<Props> = ({ children, width, onClick, disabled }) => {
    return <button  disabled={disabled} onClick={onClick} className={`bg-green rounded-full text-white text-[20px] font-bold h-7 ${width} ${outfit.className}`}>{children}</button>
}