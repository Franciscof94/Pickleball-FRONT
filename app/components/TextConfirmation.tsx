import { FC } from "react"
import { outfit } from "../home-page"
interface Props {
    children: React.ReactNode
}

export const TextConfirmation:FC<Props> = ({ children }) => {
    return (
        <div className={`px-4 text-base text-white text-center ${outfit.className}`}>
            {children}
        </div>
    )
}