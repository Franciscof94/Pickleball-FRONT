import { outfit } from "../page"

export const TextInformation = () => {
    return (
        <div className="flex justify-center lg:hidden md:hidden">
            <div className="max-w-[370px] w-full">
                <p className={`text-blue-text text-sm font-medium tracking-wide text-center ${outfit.className}`}>
                    Do you want to learn pickleball basics or master your  game? Start now and make a difference at the court!
                </p>
            </div>
        </div>

    )
}