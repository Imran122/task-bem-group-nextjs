import Image from "next/image";
import profilebanner from "../../../public/assets/profile/profilebanner.jpg";
import Layout from "../Layout";

export default function EditProfile() {
  return (
    <Layout>
      <div>
        <div className="relative  border border-red-700">
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

        {/*   form design */}
        <div>
          <div class=" py-8 flex items-center">
            <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto shadow-xl rounded border-2 border-primary_colour">
              <form action="">
                <div class="flex items-center mb-5">
                  <label
                    for="name"
                    class="w-32 inline-block text-right mr-4 text-text_colour"
                  >
                    First Name
                  </label>
                  <input
                    name="firstname"
                    id="name"
                    type="text"
                    placeholder="Your First Name"
                    class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                  />
                </div>

                <div class="flex items-center mb-10">
                  <label
                    for="twitter"
                    class="w-32 inline-block text-right mr-4 text-text_colour"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="twitter"
                    placeholder="Your Last Name"
                    class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                  />
                </div>
                <div class="text-right">
                  <button class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
