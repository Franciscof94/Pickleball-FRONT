import { FC } from "react"
import { outfit } from "../home-page"

interface Props {
    children: React.ReactNode,
    text: string,
    lastText?: string
}

export const YourBooking: FC<Props> = ({ children, text, lastText }) => {
    return (
        <div className={`text-xl text-white text-center ${outfit.className}`}>
            <p className="m-0 px-[46px] lg:px-0 md:px-0 pb-1">{text}</p>
            <span className="font-bold">{children}</span>
            <p className="m-0 px-[46px] lg:px-0 md:px-0 pb-1">{lastText || ""}</p>
        </div>
    )
}