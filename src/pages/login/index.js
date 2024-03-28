import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import sideimg from "../../../public/assets/Login.jpg";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    let data = { username, password };
    try {
      const response = await axios({
        url: "https://market.vemate.com/api/v1/account/public/users/signin",
        data: JSON.stringify(data),
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
        },
      });

      console.log("response ", response);
      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const { token } = await response.json();

      if (token) {
        const decodedToken = jwt_decode(token);
        setCookie("jwt_token", JSON.stringify(decodedToken), 1); // Set decoded token in cookie for 1 day
        console.log(decodedToken);
        // Redirect or handle login success
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  console.log("username", username);
  return (
    <div>
      <section class="flex flex-col md:flex-row h-screen items-center">
        <div class=" hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Image
            src={sideimg}
            alt="sideimage"
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="bg-[white] w-full md:max-w-md lg:max-w-full md:mx-auto md:w-full xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div class="w-full h-100">
            <h1 class="text-xl font-bold">BEM GROUP</h1>

            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form class="mt-6" method="POST" onSubmit={handleLogin}>
              <div>
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="username"
                  name="username"
                  id=""
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Email Address"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary_colour focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary_colour
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div class="text-right mt-2">
                <a
                  href="#"
                  class="text-sm font-semibold text-gray-700 hover:text-text_colour focus:text-text_colour"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                class="w-full block bg-primary_colour hover:bg-primary_colour focus:bg-text_colour text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr class="my-6 border-gray-300 w-full" />

            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">or login with</span>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
              <div class="flex flex-col space-y-4">
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span>
                    <svg
                      class="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-sm font-medium text-gray-800 group-hover:text-white">
                    Github
                  </span>
                </a>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-primary_colour rounded-md group hover:bg-text_colour focus:outline-none"
                >
                  <span>
                    <svg
                      class="mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="25px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                  </span>
                  <span class="text-sm font-medium text-black group-hover:text-black">
                    Google
                  </span>
                </a>
              </div>
            </div>

            <p class="mt-8">
              Need an account?{" "}
              <a
                href="#"
                class="text-primary_colour hover:text-text_colour font-semibold"
              >
                Create an account
              </a>
            </p>

            <p class="text-sm text-gray-500 mt-12">
              &copy; 2024 BEM GROUP - All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
