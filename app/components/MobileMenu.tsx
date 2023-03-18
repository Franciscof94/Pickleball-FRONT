import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { audiowide } from "../home-page";

interface Props {
  isOpenMenu: boolean;
  setIsOpenMenu: (value: boolean) => void;
}

export const MobileMenu: FC<Props> = ({ isOpenMenu, setIsOpenMenu }) => {
  const menuRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, [menuRef]);

  return (
    <ul
      ref={menuRef}
      className={`block lg:hidden 
                    md:hidden items-center 
                    transition-all ease-in-out 
                    duration-500 z-50 rounded-t-[30px] 
                    shadow-[0_-4px_8px_1px_rgba(0,0,0,0.25)] 
                    h-menu pt-9 pl-3 mr-4 w-full bg-white 
                    mr-11 fixed left-0 
                    ${
                      isOpenMenu
                        ? "bottom-[-16px] translate-[-16px]"
                        : "bottom-hideMenu -translate-full"
                    } 
                    ${audiowide.className}`}
    >
      <li className="py-1">
        <Link
          href="/"
          className="text-blue text-sm text-base "
          onClick={() => {
            setIsOpenMenu(false);
          }}
        >
          Book a lesson
        </Link>
      </li>
      <li className="py-1">
        <Link href="#" className="text-blue text-sm text-base">
          About me
        </Link>
      </li>
      <li className="py-1">
        <Link href="#" className="text-blue text-sm text-base">
          Blog
        </Link>
      </li>
      <li className="py-1">
        <Link
          href="/cancel-booking"
          className="text-blue text-sm text-base"
          onClick={() => {
            setIsOpenMenu(false);
          }}
        >
          Cancel a booking
        </Link>
      </li>
      <li className="py-1">
        <Link href="#" className="text-blue text-sm text-base">
          FAQs
        </Link>
      </li>
    </ul>
  );
};
