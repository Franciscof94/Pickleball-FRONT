import { FC } from "react"
import { useFormContext } from 'react-hook-form';
import { audiowide } from "../../page"


interface Props {
    type: string,
    name: string,
    placeholder: string,
    width: string,
    label: string,
    margin?: string
}

export const CustomInput: FC<Props> = ({ type, name, placeholder, width, label, margin }) => {
    const { register } = useFormContext()
    return (
        <div className="grid">
            <label className={`mb-1 font-normal text-base text-blue-text ${audiowide.className}`}>{label}</label>
            <input className={`input border text-base text-blue-text font-normal border-gray-300 outline-0 h-[48px] rounded p-2 ${width} ${margin}`} type={type} {...register(name)} placeholder={placeholder} />
        </div>
    )
}