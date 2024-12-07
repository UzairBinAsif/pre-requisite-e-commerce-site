import Image from "next/image";
import logo from "../../../public/Exclusive.png";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";

export default function Header() {
  return (
    <div className="flex w-screen h-[70px] justify-center border-b-[0.5px] border-[#aeaeae]">
      <div className="flex mt-[20px] items-center justify-between w-[1170px] h-[38px]">
        <div className="flex justify-between w-[675px] h-[24px]">
          <Image src={logo} alt="Logo Image" width={118} height={24} />
          <section className="h-content">
            <div className="flex justify-between w-[367px] h-full">
              <Link href={"/"}>Home</Link>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/signup"}>Sign Up</Link>
            </div>
          </section>
        </div>
        <div className="flex w-[347px] h-[38px] justify-between">
          <div className="flex justify-center items-center w-[243px] h-full bg-[#f5f5f5]">
            <div className="flex w-[211px] h-[24px] justify-between items-center">
              <section className="h-content">
                <p>What are you looking for?</p>
              </section>
              <CiSearch className="w-6 h-6" />
            </div>
          </div>
          <div className="flex justify-between items-center w-[80px] h-full">
            <GoHeart className="w-7 h-7" />
            <GrCart className="w-7 h-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
