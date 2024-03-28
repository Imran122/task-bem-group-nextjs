import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import profile from "../../../public/assets/profile/profile.jpg";
import profilebanner from "../../../public/assets/profile/profilebanner.jpg";
import Layout from "../Layout";
export default function Profile() {
  return (
    <Layout>
      <div class="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
        <div className="relative ">
          {/* Shadow and blur effect */}
          <div className="h-40 w-full bg-white bg-opacity-30 absolute inset-0 backdrop-filter backdrop-blur-sm shadow-lg"></div>
          {/* Image */}
          <Image className="w-full h-40" src={profilebanner} alt="image" />
          {/* Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-text_colour">
            <h2 className="text-4xl font-bold">Profile</h2>
            <h2 className="text-xl">MD Imran Hossain</h2>
          </div>
        </div>
        <div class="px-5 py-2 flex flex-col gap-3 pb-6">
          <div class="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white z-10">
            <Image src={profile} alt="img" />
          </div>
          <div class="">
            <h3 class="text-xl text-slate-900 relative font-bold leading-6">
              Imran Hossain
            </h3>
            <p class="text-sm text-gray-600">@imransoft</p>
          </div>
          <div class="flex gap-3 flex-wrap">
            <span class="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
              Developer
            </span>
            <span class="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
              Design
            </span>
            <span class="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              Managements
            </span>
            <span class="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
              Projects
            </span>
          </div>
          <div class="flex gap-2">
            <button
              type="button"
              class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Send Message
            </button>
            <button
              type="button"
              class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-primary_colour px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-green-500 active:bg-primary_colour focus:blue-gray-300 focus:outline-none focus:ring-2 "
            >
              Edit Profile
            </button>
          </div>
          <h4 class="text-md font-medium leading-3">About</h4>
          <p class="text-sm text-stone-500">
            A professional bio or biography is a short overview of your
            experience. Professional bios usually include details about
            education.
          </p>
          <h4 class="text-md font-medium leading-3">Experiences</h4>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaFacebook />
              </span>

              <div class="leading-3">
                <p class=" text-sm font-bold text-slate-700">Ui Designer</p>
                <span class="text-xs text-slate-600">5 years</span>
              </div>
              <p class="text-sm text-slate-500 self-start ml-auto">
                As Ui Designer on Front Page
              </p>
            </div>
            <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaFacebook />
              </span>
              <div class="leading-3">
                <p class=" text-sm font-bold text-slate-700">Ui Designer</p>
                <span class="text-xs text-slate-600">5 years</span>
              </div>
              <p class="text-sm text-slate-500 self-start ml-auto">
                As Ui Designer on Front Page
              </p>
            </div>
            <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
              <span className="font-semibold text-xl text-gray-400 py-2 group-hover:text-text_colour">
                <FaFacebook />
              </span>
              <div class="leading-3">
                <p class=" text-sm font-bold text-slate-700">Ui Designer</p>
                <span class="text-xs text-slate-600">5 years</span>
              </div>
              <p class="text-sm text-slate-500 self-start ml-auto">
                As Ui Designer on Front Page
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
