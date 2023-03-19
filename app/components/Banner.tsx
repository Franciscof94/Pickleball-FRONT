import { BannerImage } from "../assets"
import { audiowide, outfit } from "../page"

import { CustomButton } from "./buttons/CustomButton"


export const Banner = () => {
    return (
        <div >
            <div
                style={{ backgroundImage: `url(${BannerImage.default.src})` }}
                className="hidden lg:flex md:flex bg-no-repeat bg-cover h-[500px]  items-center"
            >
                <div className="max-w-[628px] pl-11">
                    <h1 className={` ${audiowide.className} text-[40px] text-blue-text`}>
                        Book a lesson
                    </h1>
                    <p className={` ${outfit.className} text-xl mt-[20px] mb-[48px] text-blue-text`}>
                        Do you want to become a pickleball player or improve your game?
                        Start now and makes a difference on the court!
                    </p>
                    <CustomButton width="w-[202px]">
                        CONFIRM
                    </CustomButton>
                </div>

            </div>
        </div>
    )
}

