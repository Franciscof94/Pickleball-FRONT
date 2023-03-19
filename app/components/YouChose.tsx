import { FC } from "react"
import { outfit } from "../page"

interface Props {
    children: React.ReactNode,
    padding: string
}

export const YouChose:FC<Props> = ({ children, padding }) => {
  
    return (
        <div className={`min-w-[350px] lg:min-w-[439px] md:min-w-[439px] flex justify-center text-aqua text-lg md:text-2xl lg:text-2xl ${padding}  ${outfit.className}`}>
            You chose <span className="font-semibold">{children}</span>
        </div>
    )
}