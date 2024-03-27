import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import adminicon from "../../../public/assets/icon/Admin.svg";
import logo from "../../../public/assets/icon/logoheader.png";
import searchicon from "../../../public/assets/icon/search.svg";
export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="grid grid-cols-9 gap-4 py-6 container mx-auto px-8">
        <div className="col-span-3">
          <ul className="lg:flex gap-10 mb-3  justify-center items-center  space-x-4  hidden">
            <li className="font-third_font_medium font-light text-primary_text text-lg">
              Home
            </li>
            <li className="font-third_font_medium font-light text-primary_text text-lg">
              Profile
            </li>

            <li className="font-third_font_medium font-light text-primary_text text-lg flex gap-2 justify-center items-center">
              Menu
              <span className="text-primary_colour text-lg">
                {" "}
                <IoIosArrowDown />
              </span>
            </li>
            <li className="font-third_font_medium font-light text-primary_text text-lg">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="col-span-3 lg:flex hidden justify-center items-center">
          <Image className="w-36 h-10" src={logo} alt="logo" />
        </div>
        <div className="col-span-3 lg:flex gap-8 hidden">
          <div className="flex gap-6 justify-center items-center">
            <Image src={searchicon} alt="icon" />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Image src={adminicon} alt="icon" />
            <h2 className="font-third_font_medium font-light text-primary_text text-lg text-center">
              sign in
            </h2>
          </div>
        </div>

        {/* Logo section */}
        <div className="mx-auto order-1 lg:order-2 flex items-center justify-start space-x-16 col-span-7 lg:col-auto  w-full">
          <div
            onClick={toggleMenu}
            className="flex lg:hidden lg:mr-0 cursor-pointer"
          >
            <HiOutlineBars3BottomLeft className="text-3xl" />
          </div>
          <div className="lg:hidden ">
            <Image src={logo} alt="logo" className="lg:w-72 h-10 w-40" />
          </div>
        </div>
      </div>

      {/* mobile device side nav */}
      <div
        className={`
      fixed duration-500 bg-slate-50 min-h-screen w-[240px] top-0 p-3 z-50 lg:hidden
      ${menu ? "left-0" : "-left-96"}`}
      >
        <div className="flex justify-between items-center mb-3">
          <Image src={logo} alt="" className="w-40" />
          <AiOutlineClose
            className="text-2xl text-primary cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <hr />
        <div className="">
          <ul className="mt-2">
            <div onClick={toggleMenu}>
              <li className="border py-2 mt-2 px-3 rounded shadow font-semibold">
                Home
              </li>
            </div>
            <div onClick={toggleMenu}>
              <li className="border py-2 mt-2 px-3 rounded shadow font-semibold">
                Profile
              </li>
            </div>

            <div onClick={toggleMenu}>
              <li className="border py-2 mt-2 px-3 rounded shadow font-third_font_medium font-light text-primary_text text-lg flex gap-2  items-center">
                Menu
                <span className="text-primary_colour text-lg">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </li>
            </div>

            <div to="/contact">
              <li
                className="border py-2 mt-2 px-3 rounded shadow font-semibold"
                onClick={toggleMenu}
              >
                Contact Us
              </li>
            </div>
          </ul>
          <div className="flex gap-6  border py-2 mt-2 px-3 rounded shadow">
            <Image src={searchicon} alt="icon" />
          </div>
          <div className="flex gap-2  border py-2 mt-2 px-3 rounded shadow">
            <Image src={adminicon} alt="icon" />
            <h2 className="font-third_font_medium font-light text-primary_text text-lg text-center">
              sign in
            </h2>
          </div>

          <div className="absolute bottom-10">
            <Image src={logo} alt="" className="w-44" />
            <h1 className="text-xs font-semibold">Get your best services</h1>
          </div>
        </div>
      </div>
    </>
  );
}
