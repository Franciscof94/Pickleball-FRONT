import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { outfit } from '../page'


export const Footer = () => {
    return (
        <footer className='hidden lg:flex md:flex justify-center items-end h-22 bg-blue-text'>
            <div className="flex justify-between mr-11 ml-11 w-full mb-7">
                <div className={` ${outfit.className} font-medium tracking-wide text-white`}>
                    <span className='text-base'>Designed by TeFer 2023.</span>
                </div>
                <div className='flex'>
                    <div><BsWhatsapp size={24} color="white" /></div>
                    <div className='px-2'><GrFacebookOption size={24} color="white" /></div>
                    <div><BsInstagram size={24} color="white" /></div>
                </div>
            </div>
        </footer>
    )
}