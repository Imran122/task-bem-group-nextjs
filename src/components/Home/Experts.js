import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import { default as doctor1 } from "../../../public/assets/doctor1.png";
import doctor2 from "../../../public/assets/doctor2.png";
import { default as doctor3 } from "../../../public/assets/doctor3.png";
import doctor4 from "../../../public/assets/doctor4.jpg";
import { default as doctor5 } from "../../../public/assets/doctor5.jpeg";

export default function Experts() {
  const doctors = [
    { name: "Nusrat khan", image: doctor1 },
    { name: "Imran Hossain", image: doctor2 },
    { name: "Jakir Hossain", image: doctor4 },
    { name: "Maruf Hossain", image: doctor3 },
    { name: "Tanvir Hossain", image: doctor1 },
    { name: "Shamol Hossain", image: doctor2 },
    { name: "Kabir Hossain", image: doctor5 },
  ];

  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDoctorIndex((prevIndex) =>
        prevIndex === doctors.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentDoctorIndex, doctors.length]);

  return (
    <div className="container mx-auto px-40 py-8">
      <h2 className="text-2xl font-bold md:text-4xl text-secondary_colour text-center uppercase py-2">
        Our Expert Doctors
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className={`col-span-1 flex flex-col py-4 items-center group ${
              index >= currentDoctorIndex && index <= currentDoctorIndex + 2
                ? ""
                : "hidden"
            }`}
          >
            <div className="border-8 border-gray-300 rounded-full group-hover:border-secondary_colour">
              <Image
                className="rounded-full w-56 h-56"
                src={doctor.image}
                alt="profile"
              />
            </div>
            <div className="mt-3 text-center">
              <h2 className="text-2xl font-primary_font font-semibold">
                {doctor.name}
              </h2>
              <h2 className="text-lg font-primary_font font-normal text-text_colour">
                Specialization
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
        ))}
      </div>
    </div>
  );
}
