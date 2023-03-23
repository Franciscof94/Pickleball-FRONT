import Image from "next/image"
import { FC } from "react"
import { HiMenuAlt3 } from 'react-icons/hi'
import { Logo } from "../assets"
import { Menu } from './index'
import { useAppSelector } from '../../store/hooks';
import { selectUi } from "../../store/features/uiSlice"

interface Props {
    openMenuMobile: () => void
}

export const Navbar: FC<Props> = ({ openMenuMobile }) => {
    const { stepNumber } = useAppSelector(selectUi)

    return (
        <nav className={`h-[60px] lg:h-11 md:h-11 ${stepNumber === 3 ? "bg-blue" : "bg-dirty-white"} lg:bg-blue md:bg-blue flex items-center`}>
            <div className="hidden w-full items-center justify-between  lg:flex md:flex">
                <Image src={Logo} width={154} alt="Logo de la página" className="h-full md:ml-5 lg:ml-11" />
                <Menu />
            </div>
            <div className="h-11 flex justify-end items-center pr-3 ml-auto cursor-pointer lg:hidden md:hidden " onClick={openMenuMobile}>
                <HiMenuAlt3 size={24} color={stepNumber === 3 ? "#FFFFFF" : "#003941"} />
            </div>
        </nav>
    )
}

