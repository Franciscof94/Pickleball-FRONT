import { FC } from "react"
import { audiowide } from "../home-page"


interface Props {
    children: React.ReactNode
}

export const TitleFinish:FC<Props> = ({ children }) => {
    return (
        <h2 className={`m-0 text-6 text-white leading-7 text-center ${audiowide.className}`}>{children}</h2>
    )
}