import Image from "next/image";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import doctor1 from "../../../public/assets/doctor1.png";
import doctor2 from "../../../public/assets/doctor2.png";
import doctor3 from "../../../public/assets/doctor3.png";
export default function Experts() {
  return (
    <div className="container mx-auto px-40">
      <h2 className="text-2xl font-bold md:text-4xl text-secondary_colour text-center uppercase py-2">
        Our Expert Doctors
      </h2>
      {/*  image carusel design main */}
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center ">
        {/*  children div */}
        <div className="col-span-1 flex flex-col py-4 items-center group ">
          <div className="border-8 border-gray-300 rounded-full group-hover:border-secondary_colour">
            <Image className="rounded-full" src={doctor1} alt="profile" />
          </div>
          <div className="mt-3 text-center">
            <h2 className="text-2xl font-primary_font font-semibold">
              Nusrat khan
            </h2>
            <h2 className="text-lg font-primary_font font-normal text-text_colour">
              Plastic surgeon
            </h2>
            <div className="flex gap-2 justify-center items-center">
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaFacebook />
              </span>
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaLinkedin />
              </span>
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaInstagramSquare />
              </span>
            </div>
          </div>
        </div>
        {/*  children div */}
        {/*  children div */}
        <div className="col-span-1 flex flex-col py-4 items-center group">
          <div className="border-8 border-gray-300 rounded-full group-hover:border-secondary_colour">
            <Image className="rounded-full" src={doctor2} alt="profile" />
          </div>
          <div className="mt-3 text-center">
            <h2 className="text-2xl font-primary_font font-semibold">
              Imran Hossain
            </h2>
            <h2 className="text-lg font-primary_font font-normal text-text_colour">
              Plastic surgeon
            </h2>
            <div className="flex gap-2 justify-center items-center">
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaFacebook />
              </span>
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaLinkedin />
              </span>
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaInstagramSquare />
              </span>
            </div>
          </div>
        </div>
        {/*  children div */}
        {/*  children div */}
        <div className="col-span-1 flex flex-col py-4 items-center group">
          <div className="border-8 border-gray-300 rounded-full group-hover:border-secondary_colour">
            <Image className="rounded-full" src={doctor3} alt="profile" />
          </div>
          <div className="mt-3 text-center">
            <h2 className="text-2xl font-primary_font font-semibold">
              Jakir Hossain
            </h2>
            <h2 className="text-lg font-primary_font font-normal text-text_colour">
              Plastic surgeon
            </h2>
            <div className="flex gap-2 justify-center items-center">
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaFacebook />
              </span>
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaLinkedin />
              </span>
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaInstagramSquare />
              </span>
            </div>
          </div>
        </div>
        {/*  children div */}
      </div>
    </div>
  );
}
