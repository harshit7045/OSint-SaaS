import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


import { useState } from "react";
const alertBarStyle = {
  width: "100%",
  zIndex: 1,
};
async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  //console.log(email, password);
  try {
    const response = await fetch(`http://${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ email, password }),
    });
    //console.log(process.env.BACKENDIP);
    const data = await response.json();
    console.log("Document Cookies:", data.token);
    if (data.token) {
      loginNagivate();
    } else {
      //alert({ show: false, message: data.message, severity: "error" });
    }
    //console.log(data.token);

    if (data.token) {
      Cookies.set("usertoken", data.token, { expires: 7 });
    }
  } catch (error) {
    //console.log(error);
  }
}
let loginNagivate;
let alert;
const LoginWithGoogleButton = () => {
  // const [alertData, setAlertData] = useState({
  //   show: false,
  //   message: "",
  //   severity: "",
  // });
  // alert = setAlertData;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/profile");
  };
  loginNagivate = handleLogin;
  return (
    <div className="relative flex items-center justify-center h-screen w-full  mb-[-5vh]" >
      <div className="absolute inset-0 bg-[#f8fafc] opacity-50 backdrop-blur-lg" ></div>
      <div className="relative z-10 flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-[#f8fafc] rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundSize: 'cover', // Ensures the image covers the entire div
              backgroundPosition: 'center', // Centers the image in the div
              backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBlMlGPc6XyYMS91KyP_3FBLXgBjSKDnDSWxK6j1i_54EoXb7e6BeuwU&s=10)`,
            }}
          ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button
              className="bg-[#0d7cf2] text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              onClick={loginUser}
            >
              Login
            </button>
          </div>


          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="#"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span className="text-blue-700" onClick={handleClick}>
                {" "}
                Sign Up
              </span>
            </a>
          </div>
          {/* <div style={alertBarStyle}>
              <SimpleAlert
                severity={alertData.severity}
                message={alertData.message}
              />
            </div> */}
        </div>
      </div>
    </div>
    </div >
  );
};

export default LoginWithGoogleButton;
