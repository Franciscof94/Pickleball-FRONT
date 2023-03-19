import Link from "next/link";
import { useRouter } from "next/navigation";
import { audiowide } from "../page";

export const Menu = () => {
  const router = useRouter();
  return (
    <ul
      className={`flex items-center mb-0 bg-sky-400 md:mr-5 lg:mr-11 ${audiowide.className}`}
    >
      <li
        className="mr-6 no-underline"
        onClick={() => {
          router.prefetch("/");
        }}
      >
        <Link href="/" className="no-underline text-white text-sm font-medium">
          Book a lesson
        </Link>
      </li>
      <li className="mr-6 text-white" >About me</li>
      <li className="mr-6 text-white" >Blog</li>
      <li className="mr-6">
        <Link
          href="/cancel-booking"
          className="text-white hover:text-white text-sm font-medium"
          onClick={() => {
            router.prefetch("/cancel-booking");
          }}
        >
          Cancel a booking
        </Link>
      </li>
      <li className="text-white">FAQs</li>
    </ul>
  );
};
