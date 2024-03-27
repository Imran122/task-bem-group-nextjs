import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import banner from "../../../public/assets/banner3.png";
import doctor from "../../../public/assets/doctor.png";

export default function Banner() {
  return (
    <section>
      <div className="px-3 py-5 bg-neutral-100 ">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5 container mx-auto">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-secondary_colour">
              25% OFF
            </p>
            <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Shop Now
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
              src={banner}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative container mx-auto md:grid md:grid-cols-9 gap-8 ">
        {/*   first div */}
        <div className=" md:col-span-3 py-10 bg-zinc-700 w-full text-center">
          <h3 className="text-lg font-primary_font text-gray-400 mt-4">
            REQUEST FOR YOUR
          </h3>
          <h2 className="text-2xl text-text_colour font-bold uppercase">
            Consultation
          </h2>
          <div>
            <div className="w-2/3 mx-auto">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 mt-2 border focus:border-primary_colour focus:bg-zinc-600"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="w-2/3 mx-auto">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 mt-2 border focus:border-primary_colour focus:bg-zinc-600"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="w-2/3 mx-auto">
              <button
                type="submit"
                class="w-full block bg-primary_colour hover:bg-primary_colour focus:bg-text_colour text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        {/*   second div */}
        <div className="col-span-6 lg:grid grid-cols-6   gap-5">
          <div className="col-span-3 flex flex-col justify-center items-start">
            <h4 className="text-lg font-primary_font text-gray-400 mt-4">
              WELCOME TO SHOP
            </h4>
            <h2 className="text-2xl text-text_colour font-bold uppercase">
              Find Best Products With AESTHETIC
            </h2>

            <p className="text-base mt-4 text-justify">
              30 Years of experience in Cosmetic Surgery.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-span-3 relative flex justify-center items-center ">
            <div className="w-2/3 h-1/2">
              <Image
                className=" justify-center items-center"
                src={doctor}
                alt="doctor"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 font-bold text-primary_colour md:text-6xl text-3xl fill-text_colour">
                <FaCirclePlay />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
